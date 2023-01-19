const User = require('../models/User')

class UsersRepository {
  async getAllUsers(fields = undefined) {
      return await User.findAll({attributes: fields})
  }

  async getUserById(id) {
      return await User.findByPk(id)
  }

  async getUserByEmail(email) {
      const existingUser = await User.findOne({ where: { email: email } })
      if (existingUser) {
          return existingUser
      }
      return null;
  }

  async getUserByUsername(username) {
      const existingUser = await User.findOne({ where: { username: username } })
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
}

module.exports = new UsersRepository()