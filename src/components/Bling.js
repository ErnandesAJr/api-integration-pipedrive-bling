import axios from 'axios';

const {
  BLING_URL, BLING_KEY
} = process.env;

export default class Bling {
  constructor(url, key,) {
    this.baseUrl = url || BLING_URL;
    this.key = BLING_KEY;
    this.api = axios.create({
      baseURL: this.baseUrl,
    });
  }

  getSolicitations() {
    return this.api
      .get(`/pedidos/json`, {
        params: {
          apikey: `${this.key}`,
        },
      })
      .then((response) => response.data);
  }

  createSolicitation(solicitation) {
    axios.post(`${this.baseUrl}/pedido/json/?apikey=${this.key}&xml=${solicitation}`)
      .then((response) => { console.log(response.data.retorno.erros[0]) })
      .catch((err) => {
        console.log(JSON.stringify(err))
      });
  }
}

