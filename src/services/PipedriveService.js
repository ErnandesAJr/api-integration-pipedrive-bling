import PipeDrive from '../components/PipeDrive.js';

class PipeDriveService {
  constructor() {
    this.pipedrive = new PipeDrive();
  }

  async getIdStageByName(nameStage) {
    const stages = await this.pipedrive.getStages()
    const stageWanted = stages.filter(({name})=> name == nameStage)

    return {
      stageWanted,
    };
  }


}

export default new PipeDriveService();