'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users_has_products', { 
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: { tableName: 'users'},
          key: 'id'
        },
        allowNull: false,
      },
      product_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: { tableName: 'products'},
          key: 'id'
        },
        allowNull: false,
      }  
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('clients_has_products');
  }
};
