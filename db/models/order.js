'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    
    static associate(models) {
      this.belongsTo(models.Customer, {
        as: 'Customer',
      })
    }
  }
  Order.init({
    
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'Order',
    timestamps: false
  });
  return Order;
};