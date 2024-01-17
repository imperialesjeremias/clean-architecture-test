const boom = require('@hapi/boom');
const db = require('../db/models/index')

class CategoryService {
  static _categoryServiceInstance = null

  static getInstance() {
    if(!CategoryService._categoryServiceInstance) {
      CategoryService._categoryServiceInstance = new CategoryService()
    }
    return CategoryService._categoryServiceInstance
  }

  constructor(){
  }
  async create(data) {
    const newCategory = await db.Category.create(data)
    return newCategory;
  }

  async find() {
    const categories = await db.Category.findAll()
    return categories;
  }

  async findOne(id) {
    const category = await db.Category.findByPk(id, {
      include: ['Products']
    })
    !category && boom.notFound('Categoria no encontrada')
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id)
    const categoryChange = category.update(changes)
    return {
      id,
      categoryChange,
    };
  }

  async delete(id) {
    const category = await this.findOne(id)
    await category.destroy()
    const categorydeleted = await this.findOne(id)
    if (categorydeleted) {
      return boom.conflict('El product no se ha podido borrar')
    }
    return { id };
  }

}

module.exports = CategoryService;