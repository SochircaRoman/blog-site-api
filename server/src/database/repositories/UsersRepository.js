const User = require('../models/User')

class UsersRepository {

  async getUserById(id) {
      return await User.findById(id)
  }

  async getUserByEmail(email) {
      const existingUser = await User.findOne({ email: email })
      if (existingUser) {
          return existingUser
      }
      return null;
  }

  async getUserByUsername(username) {
      const existingUser = await User.findOne({ username: username })
      if (existingUser) {
          return existingUser
      }
      return null;
  }

  async getUserByActivationLink(activationLink) {
      const existingUser = await User.findOne({ where: { activationLink: activationLink } })
      if (existingUser) {
          return existingUser
      }
      return null;
  }

  async getUsers() {
      return await User.findAll()
  }

  async createUser(username, password, email, activationLink) {
      
      // Create a new user
      const newUser = await User.create({ 
          username: username,
          password: password,
          email: email,
          activationLink: activationLink
      })

      // Check if new user was created
      if (newUser) {
          return newUser
      }
      return null;
  }

  async updateUsername(newUsername, id) {
      const existingUser = await User.findById(id)
      if (existingUser) {
        return await existingUser.update({ username: newUsername });
      }
      return null;
  }

  async updateUserPassword(newHashPassword, id) {
    const existingUser = await User.findById(id)
    if (existingUser) {
    return await existingUser.update({ password: newHashPassword });
    }
    return null;
  }

  async deleteUser(id) {
    const deletedUser = await User.findByIdAndDelete(id)
    if (deletedUser) {
        return deletedUser;
    }
    return null;
  }

  async saveUser(user) {
      const savedUser = await user.save()
      if (savedUser) {
          return savedUser
      }
      return null;
  }
}

module.exports = new UsersRepository()