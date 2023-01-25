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
    });

    // If all ok return
    return candidate;
  }

  async login(user) {

    // Try to login
    const candidate = await GenericService.request({
      url: 'auth/login',
      method: 'post',
      data: {
        username: user.username,
        password: user.password
      }
    });

    // Add data to localStorage
    if (candidate.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(candidate.data));
    }

    // If all ok return user data
    return candidate.data;
  }

  async logout() {
    localStorage.removeItem('user');
  }
  
}

export default new AuthService();