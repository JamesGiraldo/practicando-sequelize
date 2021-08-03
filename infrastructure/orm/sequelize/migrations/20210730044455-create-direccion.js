'use strict';

const MODELS = require('../../../../config/tablas');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable( MODELS.direccions , {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      calle: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,        
        references: {
          model: MODELS.users,
          key: "id",
        }
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
    await queryInterface.dropTable( MODELS.direccions );
  }
};