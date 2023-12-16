const faker = require('faker');
const boom = require('@hapi/boom')

class ProductsService {
  static _productsServiceInstace = null

  static getInstance(){
    if(!ProductsService._productsServiceInstace){
      ProductsService._productsServiceInstace = new ProductsService()
    }
    return ProductsService._productsServiceInstace
  }

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      })
    }
  }

  async create({ name, price, image })  {
    const product = {
      id: faker.datatype.uuid(),
      name,
      price,
      image,
    };
    this.products.push(product);
    return product;
  }

  find() {
    return this.products;
  }

  findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  update(id, change) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw boom.notFound('Product not found')
    }

    this.products[index] = change
    return this.products[index]

  }

  delete(id) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw boom.notFound('Product not found')
    }
    this.products.splice(index, 1)

    return `${id} deleted`
  }
}

module.exports = ProductsService;