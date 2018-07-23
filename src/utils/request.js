import axios from 'axios';

class Request {
  async get(url, headers = {}) {
    return axios.get(url, headers);
  }
}

export default new Request();
