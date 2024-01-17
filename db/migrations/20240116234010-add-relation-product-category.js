'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Product', 'category_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Category',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      unique: true,
      allowNull: false
    })
  await queryInterface.addColumn('Category', 'product')    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Product', 'category_id')
  }
};
