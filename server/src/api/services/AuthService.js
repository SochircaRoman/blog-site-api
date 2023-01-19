//const AuthRepository = require('../../database/repositories/AuthRepository');
const UsersService = require('../services/UsersService');
//const MailService = require('../services/MailService');
//const TokenService = require('../services/TokenService');

const bcrypt = require('bcryptjs');
const uuid = require('uuid');

class AuthService {

    async register(username, password, email) {

        // Check if username is unique
        const checkUsername = await UsersService.getUserByUsername(username)
        if (checkUsername) {
            throw new Error(`User with username '${username}' already exists`)
        }

        // Check if email is unique
        const checkEmail = await UsersService.getUserByEmail(email)
        if (checkEmail) {
            throw new Error(`User with email '${email}' already exists`)
        }

        // Create hash password
        const hashPassword = await bcrypt.hash(password, 10)
        if (!hashPassword) {
            throw new Error("Hash password generate error")
        }

        // Generate activation link
        const activationLink = uuid.v4()
        if (!activationLink) {
            throw new Error("Activation link generate error")
        }

        // Create a new user
        const registeredUser = await UsersService.createUser(username, hashPassword, email, activationLink)
        if (!registeredUser) {
            throw new Error("User create error")
        }

        // Send activation mail
        //const sendedLink = await MailService.sendActivationMail(email, `${process.env.API_URL}/api/auth/activate/${activationLink}`)
        //if (!sendedLink) {
            //throw new Error("Activation link send error")
        //}

        // Generate tokens
        //const tokens = await TokenService.generateTokens({username})
        //if (!tokens) {
            //throw new Error("Tokens generate error")
        //}

        // If all ok return tokens and the createdUser
        return {registeredUser}
    }

    async login(username, password) {

      // Check if username exist
      const existingUser = await UsersService.getUserByUsername(username)
      if (!existingUser) {
          throw new Error(`User with username '${username}' not be found`)
      }

      // Check if password is correct
      const correctPassword = await AuthRepository.comparePasswords(password, existingUser.password)
      if (!correctPassword) {
          throw new Error("Password is not correct")
      }

      // Create a access token for logged user
      /*
      const tokens = await TokenService.generateTokens({username})
      const accessToken = tokens.accessToken
      if (!accessToken) {
          throw new Error("Access Token generate error")
      }

      // Verify activation link
      const isActivated = existingUser.isActivated
      if (!isActivated) {
          throw new Error("Please activate your account")
      }
      */

      // If all ok return accessToken and the existingUser
      return {existingUser}
    }

}

module.exports = new AuthService()