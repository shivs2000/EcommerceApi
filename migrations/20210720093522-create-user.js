'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING,
        unique:true,
        allowNull: false, 
      },
      email:{
      type:Sequelize.TEXT('medium'),
      allowNull: false, 
      
      },
      address:{
        type:Sequelize.TEXT('long'),
        allowNull: false, 
      },
      password:{
        type:Sequelize.TEXT('long'),
        allowNull: false, 
        
      },
      isAdmin:{
           type:Sequelize.BOOLEAN,
          defaultValue:false,
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
    await queryInterface.dropTable('Users');
  }
};