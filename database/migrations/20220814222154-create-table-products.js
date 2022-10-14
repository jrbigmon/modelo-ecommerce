'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', { 
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      name: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },

      description: {
        type: Sequelize.DataTypes.STRING(400),
        allowNull: false
      },
    
      image: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
      },

      active: {
        type: Sequelize.DataTypes.TINYINT(1),
        allowNull: false
      },

      price: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
      },

      category_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: {
            tableName: 'categories'
          },
          key: 'id'
        },
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
