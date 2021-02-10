import axios from 'axios';

export default class Bling {

  getSolicitations() {
    return axios
      .get(process.env.BLING_URL +
        `/pedidos/json`, {
        params: {
          apikey: `${process.env.BLING_KEY}`,
        },
      })
      .then((response) => response.data);
  }

  createSolicitation(solicitation) {
    return axios.post(`${process.env.BLING_URL}/pedido/json/?apikey=${process.env.BLING_KEY}&xml=${solicitation}`).then((response) => response.data.retorno)
      
  }
}

