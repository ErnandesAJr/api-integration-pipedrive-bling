import axios from 'axios';

const {
  PIPEDRIVE_URL, PIPEDRIVE_KEY
} = process.env;

class PipeDrive {
  constructor(url, key,) {
    this.baseUrl = url || PIPEDRIVE_URL;
    this.key = key || PIPEDRIVE_KEY;
    this.api = axios.create({
      baseURL: this.baseUrl,
    });
  }

  // async init() {
  //   this.token = await this._authenticate();
  // }

  // async _authenticate() {
  //   const response = await this.api
  //     .post('/auth', {
  //       username: this.username,
  //       passwd: this.passwd,
  //     });
  //   return response.data.jwt;
  // }

  getStages() {
    return this.api
      .get(`/stages`, {
        params: {
          api_token: `${this.key}`,
        },
      })
      .then((response) => response.data.data);
  }

  getAllDeals() {
    return this.api.get(
      `/deals`,
      {
        params: {
          api_token: `${this.key}`,
        },
      },
    );
  }
}

export default PipeDrive;