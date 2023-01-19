const bcrypt = require("bcryptjs")


class AuthRepository {
  
    async comparePasswords(password, hashPassword) {
        // Compare and return the user password with hashed password from database
        return await bcrypt.compare(password, hashPassword)
    }

}

module.exports = new AuthRepository()