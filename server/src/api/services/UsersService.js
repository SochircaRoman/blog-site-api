const UsersRepository = require('../../database/repositories/UsersRepository')

class UsersService {
    async getAllUsers(fields = undefined) {
        const allUsers = await UsersRepository.getAllUsers(fields)
        if (allUsers) {
            return allUsers;
        }
        return null;
    }

    async getUserById(id) {
        const existingUser = await UsersRepository.getUserById(id)
        if (existingUser) {
            return existingUser;
        }
        return null;
    }

    async getUserByEmail(email) {
        const existingUser = await UsersRepository.getUserByEmail(email)
        if (existingUser) {
            return existingUser;
        }
        return null;
    }

    async getUserByUsername(username) {
        const existingUser = await UsersRepository.getUserByUsername(username)
        if (existingUser) {
            return existingUser;
        }
        return null;
    }

    async getUserByActivationLink(activationLink) {
        const existingUser = await UsersRepository.getUserByActivationLink(activationLink)
        if (existingUser) {
            return existingUser;
        }
        return null;
    }

    async createUser(username, password, email, activationLink) {
        const createdUser = await UsersRepository.createUser(username, password, email, activationLink)
        if (createdUser) {
            return createdUser;
        }
        return null;
    }

    async updateUsername(newUsername, id) {
        return await UsersRepository.updateAdminRoot(newUsername, id);
    }

    async updateUserPassword(oldPassword, newPassword, id) {
        return await UsersRepository.updateUser(oldPassword, newPassword, id);
    }

    async delete(id) {
        return await UsersRepository.delete(id)
    }

    async saveUser(user) {
        const savedUser = await UsersRepository.saveUser(user)
        if (savedUser) {
            return savedUser;
        }
        return null;
    }
}

module.exports = new UsersService()