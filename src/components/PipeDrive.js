import axios from 'axios';


class PipeDrive {

  getStages() {
    return axios
      .get(process.env.PIPEDRIVE_URL + `/stages`, {
        params: {
          api_token: `${process.env.PIPEDRIVE_KEY}`,
        },
      })
      .then((response) => response.data.data);
  }

  getAllDeals() {
    return axios.get(process.env.PIPEDRIVE_URL +
      `/deals`,
      {
        params: {
          api_token: `${process.env.PIPEDRIVE_KEY}`,
        },
      }).then((response) => response.data.data);
  }
}

export default PipeDrive;