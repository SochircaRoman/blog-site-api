const Post = require('../models/Post')

class PostsRepository {

    async deleteAllPosts(id) {
        const deletedPosts = await Post.deleteMany({ postedBy: id })
        if (deletedPosts) {
            return deletedPosts;
        }
        return null;
    }

    async createPost(post) {
        const createdPost = await Post.create(post)
        if (createdPost) {
            return createdPost;
        }
        return null;
    }
}

module.exports = new PostsRepository()