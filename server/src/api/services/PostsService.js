const PostsRepository = require('../../database/repositories/PostsRepository')

class PostsService {

    async createPost(post) {
        const createdPost = await PostsRepository.create(post)
        if (createdPost) {
            return createdPost;
        }
        return null;
    }
}

module.exports = new PostsService()