const AuthService = require('../services/AuthService');

class AuthController{

  async register(request, response){
      try{

          // Get the username, password and email values
          const { username, password, email } = request.body

          // Check if username, password and email is present
          if (!username || !password || !email) {
              if (!username) {
                  return response.status(404).json({ error: "Username is not present" })
              } else if (!password) {
                  return response.status(404).json({ error: "Password is not present" })
              } else {
                  return response.status(404).json({ error: "Email is not present" })
              }
          }

          // Register the new user
          const registeredUser = await AuthService.register(username, password, email)
          if (!registeredUser) {
              return response.status(400).json({ error: "User not created" })
          }

          // Send the succes response
          return response.status(200).json({ message: "User successfully created", user: registeredUser });
          
      } catch(error){
          // Send error response
          return response.status(400).json({ error: error.message });
      }
  }

}

module.exports = new AuthController()