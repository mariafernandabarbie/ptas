'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('usuarios', [
        {nome: 'Fernanda Maria',},
        { nome: 'Maria Fernanda', },
        { nome: ' Fernanda', },
        { nome: 'Maria ', },
        { nome: 'Maria Fer', }
      
      
      ], {});
  
  },

  async down (queryInterface, Sequelize) {
   
    
      await queryInterface.bulkDelete('usuarios', null, {});
    
  }
};
