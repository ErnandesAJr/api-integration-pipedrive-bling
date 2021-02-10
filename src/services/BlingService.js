import Bling from '../components/Bling.js';
import mountXmlForRequestBling from '../utils/objectXmlBling.js'

class BlingService {
  constructor() {
    this.bling = new Bling();
  }

  async createSolicitations(solicitations) {
    let totalSolicitations = solicitations.length
    let solicitationsAdd = [];
    solicitations.forEach(async solicitation => {
      const solicitationsXML = mountXmlForRequestBling(solicitation)
      const response = await this.bling.createSolicitation(solicitationsXML)
      if (response.pedidos) {
        solicitationsAdd.push(solicitation);
      }
      // if(response.erros) Count the ones already created
    });
    return solicitationsAdd

  }
}

export default new BlingService();