import axios from "axios";

const API_URL = 'http://localhost:3000/api'

class GenericService {
  async request({ url, method, data = {}, headers = {} }) {
    const response = await axios[method](`${API_URL}/${url}`, data, headers);
    return response;
  }
}

export default new GenericService();