'use strict';

const MODELS = require("../../../../config/tablas");


module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert( MODELS.posts, [{
        
        title: "Post 1",
        cuerpo: "Post 1 cuerpo",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()  
        
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete( MODELS.posts, null, {});
     
  }
};
