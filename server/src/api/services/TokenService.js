const jwt = require('jsonwebtoken')

class TokenService {

    async generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '120m'});

        return {
            accessToken
        }
    }

}

module.exports = new TokenService()