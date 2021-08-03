'use strict';

const MODELS = require("../../../../config/tablas");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert( MODELS.direccions, [{
        calle: 'enrique segoviano',   
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date() 
      }], {});

  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete( MODELS.direccions, null, {});
     
  }
};
