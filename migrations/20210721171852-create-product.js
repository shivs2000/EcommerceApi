'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      discount:{
        type:Sequelize.BIGINT,
        allowNull: false, 
      },
      price:{
        type:Sequelize.BIGINT,
        allowNull: false, 
      },
      available:{
        type:Sequelize.INTEGER,
        allowNull: false, 
      },
      productType:{
        type:Sequelize.STRING,
        allowNull: false, 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};