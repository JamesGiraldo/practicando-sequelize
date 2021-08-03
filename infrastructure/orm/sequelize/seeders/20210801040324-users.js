'use strict';

const MODELS = require("../../../../config/tablas");

module.exports = {
  up: async (queryInterface, Sequelize) => {

     
      await queryInterface.bulkInsert( MODELS.users , [{
        nombre: 'Angie',     
        email: "angiiiecs12@gmail.com",
        password: '123456',
        userName: 'angie.sanchez',
        birthday: '2001-09-12',
        createdAt: new Date(),
        updatedAt: new Date()        
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {  
     
    await queryInterface.bulkDelete( MODELS.users , null, {});
     
  }
};
