'use strict';

const { Model } = require('sequelize');
const MODELS = require('../../../../config/tablas');

module.exports = (sequelize, DataTypes) => {
  class Direccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Añade una clave userId a la tabla addresses
      this.belongsTo(models[MODELS.users]);
    }
  };
  Direccion.init({
    calle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El campo calle no puede estar vacio",
        }
      }
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
  }, {
    sequelize,
    modelName: MODELS.direccions,
  });
  return Direccion;
};