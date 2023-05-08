'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('dados', [{
        nome: 'John ', sobrenome: 'doe', idade: 45},
        { nome: 'Maria Fernanda', sobrenome: 'souza', idade: 15},
        { nome: ' Fernanda', sobrenome: 'maria', idade: 75 },
        { nome: 'Maria ', sobrenome: 'souza', idade: 16 },
        { nome: 'Maria', sobrenome: 'fernanda', idade: 25 }
      
      
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('dados', null, {});
     
  }
};
