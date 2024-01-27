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
      this.belongsToMany(models.Product, {
        as: 'items',
        through: models.OrderWithProducts,
        foreignKey: 'order_id',
        otherKey: 'product_id'
      })
    }
  }
  Order.init({
    
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'Orders',
    timestamps: false
  });
  return Order;
};