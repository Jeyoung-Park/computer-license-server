const Sequelize = require("sequelize");

module.export = class Description extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        info: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        is_like: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        keyword: {
          type: Sequelize.STRING(30),
          allowNuLL: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Description",
        tableName: "desriptions",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {}
};
