const CategoriesService = require('../services/CategoriesService')

class CategoriesController{

  async getCategory(request, response){
    try{
        // Verify if category exist
        const category = await CategoriesService.getCategory(request.params.id)
        if(!category){
            return response.status(404).json({ error: "Category with that id no exist" })
        }

        // Return category
        return response.status(200).json(category)
    } catch(error){
        // Send error response
        return response.status(500).json(JSON.stringify(error.message))
    }
  }

  async getAllCategories(request, response){
    try{
        // Verify if category exist
        const categories = await CategoriesService.getAllCategories()
        if(!categories){
            return response.status(404).json({ error: "No category found" })
        }

        // Return categories
        return response.status(200).json(categories)
    } catch(error){
        // Send error response
        return response.status(500).json(JSON.stringify(error.message))
    }
  }

  async createCategory(request, response){
    try{
        // Create category
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