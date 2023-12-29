const boom = require('@hapi/boom')
const sequelize = require('../libs/sequelize');

class ProductsService {
  static _productsServiceInstace = null

  static getInstance(){
    if(!ProductsService._productsServiceInstace){
      ProductsService._productsServiceInstace = new ProductsService()
    }
    return ProductsService._productsServiceInstace
  }

  constructor() {
  }

  generate() {
    
  }

  async create({ name, price, image })  {
  }

  async find() {
    const query = 'SELECT * FROM tasks'
    const response = await sequelize.query(query)
    return response.data
  }

  findOne(id) {
  }

  update(id, change) {
  }

  delete(id) {
  }
}

module.exports = ProductsService;