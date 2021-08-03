'use strict';

const MODELS = require('../../../../config/tablas');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable( MODELS.user_bands, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,        
        references: {
          model: MODELS.users,
          key: "id",
        }
      },
      bandId: {
        type: Sequelize.INTEGER,
        allowNull: false,        
        references: {
          model: MODELS.bands,
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
    await queryInterface.dropTable( MODELS.user_bands );
  }
};