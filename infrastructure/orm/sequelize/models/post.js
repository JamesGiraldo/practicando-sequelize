"use strict";
const { Model } = require("sequelize");
const MODELS = require("../../../../config/tablas");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo( models[MODELS.users] )
    }
  }
  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
          notNull: {
            msg: "El titulo no puede ser nulo",
          },         
          len: {
            args: [10, 255],
            msg: "El titulo tiene que ser minimo de 10 caracteres",
          },
        },
      },
      cuerpo: {
        type: DataTypes.TEXT,
        allowNull:false,
        validate: {
          notNull: {
            msg: "El cuerpo no puede ser nulo",
          },
          len: {
            args: [10, 255],
            msg: "El cuerpo tiene que ser minimo de 10 caracteres",
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo de usuario no puede estar vacio",
          }
        }
      }
    },
    {
      sequelize,
      modelName: MODELS.posts,
    }
  );
  return Post;
};
