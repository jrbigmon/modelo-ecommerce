'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
      },

      email: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.DataTypes.STRING(300),
        allowNull: false,
      },
    cep: {
      type: Sequelize.DataTypes.STRING(200),
      allowNull: true,
    },
    address_number: {
      type: Sequelize.DataTypes.STRING(20),
      allowNull: true,
    },

    is_admin: {
      type: Sequelize.DataTypes.TINYINT,
      allowNull: false,
    }


    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('users');

  }
};