const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");
const nunjucks = require("nunjucks");
const logger = require("./utils/logger");
const helmet = require("helmet");
const hpp = require("hpp");

dotenv.config();
const indexRouter = require("./routes");
const descriptionRouter = require("./routes/description");
const { sequelize } = require("./models");

const app = express();
app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connection success");
  })
  .catch((err) => {
    console.error(err);
  });

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(helmet());
  app.use(hpp({ contentSecurityPolicy: false }));
} else {
  app.use(morgan("dev"));
}
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("cookiesecret"));
const sessionOption = {
  resave: false,
  saveUninitialized: false,
  secret: "cookiesecret",
  cookie: {
    httpOnly: true,
    secure: false,
  },
};
if (process.env.NODE_ENV === "production") {
  sessionOption.proxy = true;
}
app.use(session(sessionOption));

app.use("/", indexRouter);
app.use("/descriptions", descriptionRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  logger.error(error.message);
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
