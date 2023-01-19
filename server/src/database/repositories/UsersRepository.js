const User = require('../models/User')

class UsersRepository {
  

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