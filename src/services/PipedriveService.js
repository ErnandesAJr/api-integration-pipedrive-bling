import PipeDrive from '../components/PipeDrive.js';

class PipeDriveService {
  constructor() {
    this.pipedrive = new PipeDrive();
  }

  async getIdStageByName(nameStage) {
    const stages = await this.pipedrive.getStages()
    const stageWanted = stages.filter(({name})=> name == nameStage)
    return stageWanted[0];
  }

  async getDealsByStage(stageId) {
    const deals = await this.pipedrive.getAllDeals()
    const dealsStage = deals.filter(({stage_id})=> stage_id == 5)
    return dealsStage;
  }


}

export default new PipeDriveService();