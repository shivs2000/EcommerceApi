'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order, { 
        foreignKey: 'userId', 
        as: 'Order', 
        onDelete: 'CASCADE' 
      });
      // define association here
    }
  };
  User.init({
    userName: DataTypes.STRING,
    email:DataTypes.TEXT,
    password:DataTypes.TEXT,
    address:DataTypes.TEXT,
    isAdmin:DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName:'User',
  });
  return User;
};