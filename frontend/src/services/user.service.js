import GenericService from './generic.service';
import authHeader from './auth-header';

class UserService {
  getPublicContent() {
    const content = GenericService.request({
      url: 'users',
      method: 'get',
      data: {},
      headers: authHeader()
    });
    return content;
  }

  getUserBoard() {
    const content = GenericService.request({
      url: `user/${id}`,
      method: 'get',
      data: {},
      headers: authHeader()
    });
    return content;
  }

  getAdminBoard() {
    const content = GenericService.request({
      url: `user/${id}`,
      method: 'get',
      data: {},
      headers: authHeader()
    });
    return content;
  }
}

export default new UserService();