const Post = require('../models/Post')

class PostsRepository {

    async deleteAllPosts(id) {
        const deletedPosts = await Post.deleteMany({ id: id })
        if (deletedPosts) {
            return deletedPosts;
        }
        return null;
    }
}

module.exports = new PostsRepository()