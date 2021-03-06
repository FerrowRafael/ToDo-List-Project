'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Priorities', [
      {
        'name': 'Low',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        'name': 'Medium',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        'name': 'High',
        createdAt: new Date(),
        updatedAt: new Date()
      }

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
