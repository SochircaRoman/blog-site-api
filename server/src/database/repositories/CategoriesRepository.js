const Category = require('../models/Category')

class CategoriesRepository {

  async getCategory(id) {
    return await Category.findById(id);
  }

  async getAllCategories() {
    return await Category.find();
  }

  async createCategory(category) {
    const createdCategory = await Category.create(category)
    if (createdCategory) {
        return createdCategory;
    }
    return null;
  }

}

module.exports = new CategoriesRepository()