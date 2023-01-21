const PostsService = require('../services/PostsService')

class PostsController{

    async getPost(request, response){
        try{
            // Verify if post exist
            const post = await PostsService.getPost(request.params.id)
            if(!post){
                return response.status(404).json({ error: "Post with that id no exist" })
            }

            // Return post information
            return response.status(200).json(post)
        } catch(error){
            console.log(error);
            return response.status(500).json(JSON.stringify(error))
        }
    }

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

    async updatePost(request, response){
        try{
            // Check if body is not empty
            if (!request.body) {
                return response.status(404).json({ error: "Body is empty" })
            }

            // Update the post
            const updatedPost = await PostsService.updatePost(request.params.id, request.body)
            if (!updatedPost) {
                return response.status(404).json({ error: "Post with that id no exist" })
            }

            // Return updated post
            return response.status(200).json({ message: "Post has been updated", post: updatedPost });
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async deletePost(request, response){
        try{
            // Check if post exist
            const existingPost = await PostsService.getPost(request.params.id)
            if (!existingPost) {
                throw new Error(`Post with id '${username}' no exist`)
            }

            // Delete post
            const deletedPost = await PostsService.deletePost(request.params.id)
            if (!deletedPost) {
                return response.status(404).json({ error: "Post has not been deleted" })
            }

            // If all ok return succes message
            return response.status(200).json({ message: "Post has been deleted" });
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }
}

module.exports = new PostsController()