import axios from "axios";

const API_URL = 'http://localhost:3000/api/'

class GenericService {
  async request({ url, method, data = {} }) {
    const response = await axios[method](`${API_URL}/${url}`, data);
    return response;
  }
}

export default new GenericService();