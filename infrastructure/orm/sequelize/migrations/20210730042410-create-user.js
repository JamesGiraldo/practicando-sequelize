'use strict';

const MODELS = require("../../../../config/tablas");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable( MODELS.users, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      birthday: {
        type: Sequelize.DATEONLY
      },
      userName: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable( MODELS.users );
  }
};