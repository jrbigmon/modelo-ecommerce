'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users_has_products', 'hashBuy', { 
      type: Sequelize.DataTypes.STRING(500),
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users_has_products', 'hashBuy');
  }
};
