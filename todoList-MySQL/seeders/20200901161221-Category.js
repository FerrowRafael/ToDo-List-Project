'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        'name': 'Regalos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
          'name': 'Videos',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Aire libre',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Alimentación',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Animales',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Arquitectura',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Arte',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Autos',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Bodas',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Belleza',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Celebridades',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Ciencia',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Cine, musica y libros',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Citas',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Decoracion de casa',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Deportes',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Diseño',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Educación',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Festivos y eventos',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Fotografía',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Artesanias',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Historia',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Humor',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Ilustraciones y carteles',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Jardineria',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Moda para hombre',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Moda para mujer',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Mundo geek',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Niños y paternidad',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Productos',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Salud y bienestar',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Tatuajes',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Tecnologia',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          'name': 'Viajes',
          createdAt: new Date(),
          updatedAt: new Date()
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
