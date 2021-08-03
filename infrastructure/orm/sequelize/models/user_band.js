'use strict';
const { Model } = require('sequelize');
const MODELS = require('../../../../config/tablas');

module.exports = (sequelize, DataTypes) => {
  class User_Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User_Band.init({
    userId: DataTypes.INTEGER,
    bandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: MODELS.user_bands,
  });
  return User_Band;
};