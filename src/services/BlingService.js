import Bling from '../components/Bling.js';
import mountXmlForRequestBling from '../utils/objectXmlBling.js'

class BlingService {
  constructor() {
    this.bling = new Bling();
  }

  //lidar quando uma solicitação ja tiver sido criada e as outras não, saber se vai funcionar
  async createSolicitations(solicitations) {
    solicitations.forEach(async solicitation => {
      const solicitationsXML = mountXmlForRequestBling(solicitation)
      await this.bling.createSolicitation(solicitationsXML)
    });
  }
}

export default new BlingService();