const PostsService = require('../services/PostsService')

class PostsController{

    async createPost(request, response){
        try{
            // Create post
            const createdPost = await PostsService.createPost(request.body)
            if (!createdPost) {
                return response.status(404).json({ error: "Post has not created" })
            }

            // Return created post
            return response.status(200).json({ message: "Post has been created", post: createdPost });
        } catch(error){
            // Send error response
            return response.status(500).json(JSON.stringify(error.message))
        }
    }
}

module.exports = new PostsController()