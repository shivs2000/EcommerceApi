'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deliveryDate: {
        type: Sequelize.STRING,
        defaultValue:"yet to be confirmed",

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId:{
       type:Sequelize.INTEGER,
       references:{
        model: 'users', key: 'id' },
        onDelete: 'CASCADE',
      },
      productId:{
        type:Sequelize.INTEGER,
        references:{
         model: 'products', key: 'id' },
         onDelete: 'CASCADE',
      
      },
      orderStatus:{
          type:Sequelize.STRING,
          defaultValue:"PENDING"
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};