const CategoriesService = require('../services/CategoriesService')

class CategoriesController{

  async createCategory(request, response){
    try{
        // Create post
        const createdCategory = await CategoriesService.createCategory(request.body)
        if (!createdCategory) {
            return response.status(404).json({ error: "Category has not created" })
        }

        // Return created category
        return response.status(200).json({ createdCategory });
    } catch(error){
        // Send error response
        return response.status(500).json(JSON.stringify(error.message))
    }
  }
}

module.exports = new CategoriesController()