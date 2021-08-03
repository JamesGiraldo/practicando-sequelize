"use strict";

const { Model } = require("sequelize");
const MODELS = require("../../../../config/tablas");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // añadir una clave foranea userId a la tabla Direccions
      this.hasOne( models[MODELS.direccions]);
      // añadir una clave foranea userId a la tabla Posts
      this.hasMany( models[MODELS.posts]);
      // añadir una clave foranea userId a la tabla user_bands
      this.belongsToMany( models[MODELS.bands], { through: MODELS.user_bands });      
    }
  }
  User.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo nombre no puede estar vacio",
          },
          isAlpha: {
            args: true,
            msg: "El nombre solo puede contener letras",
          },
          len: {
            args: [3, 255],
            msg: "El nombre tiene que ser minimo de 3 caracteres",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "El campo tiene que ser un correo valido",
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [6, 255],
            msg: "La contraseña tiene que ser minimo de 6 caracteres",
          }
        },      
      },
      imageUrl: {
        type: DataTypes.STRING,
        validate: {          
          allowNull: true
        }
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo no puede ser nulo",            
          },
          len: {
            args: [6, 100],
            msg: "El nombre de usuario minimo es de 6 caracteres",
          }
        }
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,      
      },
      birthday: DataTypes.DATEONLY,

      // Si es 0 es usuario normal y si es 1 es administrador
      role: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: MODELS.users      
    }
  );
  return User;
};
