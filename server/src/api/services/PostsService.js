const PostsRepository = require('../../database/repositories/PostsRepository')

class PostsService {

    async createPost(post) {
        return await PostsRepository.create(post)
    }
}

module.exports = new PostsService()