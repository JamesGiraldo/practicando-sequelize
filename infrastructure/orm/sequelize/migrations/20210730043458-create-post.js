'use strict';

const MODELS = require('../../../../config/tablas');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable( MODELS.posts, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      cuerpo: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable( MODELS.posts );
  }
};