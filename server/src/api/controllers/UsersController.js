const UsersService = require('../services/UsersService');

class UsersController{



    async updateUsername(request, response){
        try{
            // Get and verify if request is not empty
            const { username } = request.body
            if (username == "") {
                return response.status(404).json({message: "Nothing to update"});
            }

            // Verify if id is valid and user exist
            const user = await UsersService.getOne(request.params.id)
            if(!user){
               return response.status(404).json({ error: "User with that id no exist" })
            }

            // Update user information
            return response.status(200).json(await UsersService.updateUsername(username));
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async updateUserPassword(request, response){
        try{
            // Get and verify if request is not empty
            const { oldPassword, newPassword} = request.body
            if (!oldPassword && !newPassword) {
                return response.status(404).json({message: "Nothing to update"});
            }

            // Verify if id is valid and user exist
            const user = await UsersService.getOne(request.params.id)
            if(!user){
              return response.status(404).json({ error: "User with that id no exist" })
            }

            // Update user information
            return response.status(200).json(await UsersService.updateUserPassword(oldPassword, newPassword));
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

}

module.exports = new UsersController()