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
    return [];
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = CategoryService;