const boom = require('@hapi/boom')
const db = require('../db/models/index')
const { Op } = require('sequelize')

class ProductsService {
  static _productsServiceInstace = null

  static getInstance(){
    if(!ProductsService._productsServiceInstace){
      ProductsService._productsServiceInstace = new ProductsService()
    }
    return ProductsService._productsServiceInstace
  }

  constructor() {}

  async create({ name, price, image })  {
    const newProduct = await db.Product.create({name, price, image})
  }

  async find() {
    const options = {
      include: ['Category'],
      where: {}
    }
    const { limit, offset } = query
    if (limit && offset) {
      options.limit = limit
      options.offset = offset
    }
    const { priceMin, priceMax } = query
    if (priceMin && priceMax ){
      options.where.price = {
        [Op.gte]: priceMin,
        [Op.lte]: priceMax
      }
    }
    const response = await db.Product.findAll(options)
    return res.status(200).json(response)
  }

  async findOne(id) {
    const productId = await db.Product.findByPk(id)
    !productId && boom.notFound('Producto no encontrado')
    return res.status(200).json(productId)
  }

  async update(id, change) {
    const Product = await this.findOne(id)
    const productChange = Product.update(change)
    return {
      id,
      productChange
    }
  }

  async delete(id) {
    const product = await this.findOne(id)
    await product.destroy()
    const productdelted = await this.findOne(id)
    if (productdelted) {
      return boom.conflict('El product no se ha podido borrar')
    }
    return res.status(200).json('Producto eliminado')
  }
}

module.exports = ProductsService;