'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const categories = [
      {
        name: 'Chair'
      },
      {
        name: 'Cell'
      },
      {
        name: 'Head-Set'
      },
      {
        name: 'Hardwares'
      },
      {
        name: 'Peripherals'
      }
    ]
    await queryInterface.bulkInsert('categories', categories, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
