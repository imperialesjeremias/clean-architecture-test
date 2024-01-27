'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('OrderWithProducts', 'order_id', {
      type: Sequelize.INTEGER,
      field: 'order_Id',
      references: {
        model: 'Orders',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }),
    await queryInterface.addColumn('OrderWithProducts', 'product_id', {
      type: Sequelize.INTEGER,
      field: 'product_id',
      references: {
        model: 'Products',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL' 
    }) 
  },
  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('OrderWithProducts', 'order_id'),
   await queryInterface.removeColumn('OrderWithProducts', 'product_id')
  }
};