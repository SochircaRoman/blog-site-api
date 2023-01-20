const UsersRepository = require('../../database/repositories/UsersRepository')
const AuthRepository = require('../../database/repositories/AuthRepository');
const PostsRepository = require('../../database/repositories/PostsRepository')

const bcrypt = require('bcryptjs');

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
        return await UsersRepository.updateUsername(newUsername, id);
    }

    async updateUserPassword(oldPassword, newPassword, user) {

        // Check if password is correct
        const correctPassword = await AuthRepository.comparePasswords(oldPassword, user.password)
        if (!correctPassword) {
            throw new Error("Password is not correct")
        }

        // Generate new hashPassword
        const newHashPassword = await bcrypt.hash(newPassword, 10)
        if (!newHashPassword) {
            throw new Error("Hash password generate error")
        }

        return await UsersRepository.updateUserPassword(newHashPassword, user.id);
    }

    async deleteUser(id) {
        // Delete all user posts
        const deletedPosts = await PostsRepository.deleteAllPosts(id)
        if (!deletedPosts) {
            throw new Error("Delete posts error")
        }

        // Delete user account
        const deletedUser = await UsersRepository.deleteUser(id)
        if (!deletedUser) {
            throw new Error("Delete user error")
        }

        return (deletedUser, deletedPosts)
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