const boom = require('@hapi/boom');
const db = require('../db/models/index')

class OrderService {
  static _orderServiceInstance = null
  
  static getInstance(){
    if(!OrderService._orderServiceInstance){
      OrderService._orderServiceInstance = new OrderService()
    }
    return OrderService._orderServiceInstance
  }

  constructor(){
  }

  async create(data) {
    const newOrder = await db.Order.create(data)
    return data
  }

  async createItem(data) {
    const newItem = await db.OderWithProducts.create(data)
    return newItem
  }

  async find() {
    return []
  }

  async findOne(id) {
    const order = await db.Order.findByPk(id, {
      include: [
        {
          association: 'Customer',
          include: ['User']
        },
        'items'
      ]
    })
    return order
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id }
  }

}

module.exports = OrderService