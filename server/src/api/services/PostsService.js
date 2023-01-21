const PostsRepository = require('../../database/repositories/PostsRepository')

class PostsService {

  async getPost(id) {
      const post = await PostsRepository.getPost(id)
      if (post) {
          return post;
      }
      return null;
  }

  async getAllPosts() {
      const posts = await PostsRepository.getAllPosts()
      if (posts) {
          return posts;
      }
      return null;
  }

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

    async deletePost(id) {
        const deletedPost = await PostsRepository.deletePost(id)
        if (deletedPost) {
            return deletedPost;
        }
        return null;
    }
}

module.exports = new PostsService()