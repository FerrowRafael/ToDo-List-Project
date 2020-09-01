'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
    {
      name: "Prueba 1",
      description: "Descripcion Prueba 1",
      status: 1,
      PriorityId: 3,
      CategoryId: 2 
    },
    {
      name: "Prueba 2",
      description: "Descripcion Prueba 2",
      status: 0,
      PriorityId: 1,
      CategoryId: 5 
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
