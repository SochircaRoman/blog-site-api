const PostsRepository = require('../../database/repositories/PostsRepository')

class PostsService {

    async createPost(post) {
        const createdPost = await PostsRepository.createPost(post)
        if (createdPost) {
            return createdPost;
        }
        return null;
    }

    async updatePost(id, post) {
        const updatedPost = await PostsRepository.updatePost(id, post)
        if (updatedPost) {
            return updatedPost;
        }
        return null;
    }
}

module.exports = new PostsService()