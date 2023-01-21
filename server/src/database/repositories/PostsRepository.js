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

    async updatePost(id, post) {
        const existingPost = await Post.findByIdAndUpdate(id, post)
        if (existingPost) {
            return existingPost;
        }
        return false;
    }
}

module.exports = new PostsRepository()