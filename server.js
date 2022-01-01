const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();

app.listen(app.get("port"), () => {
  console.log(
    app.get("port"),
    "번 포트에서 대기중",
    process.env.USERNAME,
    process.env.SEQUELIZE_PASSWORD,
    process.env.HOST,
    process.env.COOKIE_SECRET
  );
});
