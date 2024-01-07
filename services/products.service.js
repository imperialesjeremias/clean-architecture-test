const boom = require('@hapi/boom')
const db = require('../db/models/index')

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
    const response = await db.Product.findAll()
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