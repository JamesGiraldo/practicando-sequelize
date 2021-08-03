'use strict';
const { Model } = require('sequelize');
const MODELS = require('../../../../config/tablas');

module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // añadir una clave foranea userId a la tabla user_bands
      this.belongsToMany( models[MODELS.users], { through: MODELS.user_bands });      

    }
  };
  Band.init({
    nombre: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: MODELS.bands,
  });
  return Band;
};