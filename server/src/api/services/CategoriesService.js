const CategoriesRepository = require('../../database/repositories/CategoriesRepository')

class CategoriesService {

  async getAllCategories() {
    const categories = await CategoriesRepository.getAllCategories()
    if (categories) {
        return categories;
    }
    return null;
  }

  async createCategory(category) {
    const createdCategory = await CategoriesRepository.createCategory(category)
    if (createdCategory) {
        return createdCategory;
    }
    return null;
  }
  
}

module.exports = new CategoriesService()