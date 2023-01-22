const Category = require('../models/Category')

class CategoriesRepository {

  async createCategory(category) {
    const createdCategory = await Category.create(category)
    if (createdCategory) {
        return createdCategory;
    }
    return null;
  }

}

module.exports = new CategoriesRepository()