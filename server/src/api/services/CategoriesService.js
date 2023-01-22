const CategoriesRepository = require('../../database/repositories/CategoriesRepository')

class CategoriesService {

  async createCategory(category) {
    const createdCategory = await PostsRepository.createdCategory(category)
    if (createdCategory) {
        return createdCategory;
    }
    return null;
  }
  
}

module.exports = new CategoriesService()