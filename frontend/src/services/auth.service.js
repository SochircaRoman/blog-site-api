import GenericService from './generic.service';

class AuthService {

  async register(user) {
    const candidate = await GenericService.request({
      url: 'auth/register',
      method: 'post',
      data: {
        username: user.username,
        password: user.password,
        email: user.email
      }
    })

    // If all ok return
    return candidate;
  }
  
}

export default new AuthService();