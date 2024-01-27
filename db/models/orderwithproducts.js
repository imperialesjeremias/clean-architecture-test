'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderWithProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderWithProducts.init({
    amount: DataTypes.NUMBER
  }, {
    sequelize,
    tableName: 'OrderWithProducts',
    modelName: 'OrderWithProducts',
    timestamps: false
  });
  return OrderWithProducts;
};