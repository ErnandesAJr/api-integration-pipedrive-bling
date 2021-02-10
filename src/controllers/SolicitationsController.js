import HttpStatus from 'http-status-codes';
import PipeDriveService from '../services/PipeDriveService.js'
import BlingService from '../services/BlingService.js';
import SummaryOrders from '../database/models/SummaryOrders.js'

class SolicitationsController {

  async get(req, res) {
    const today = new Date().toJSON().slice(0, 10)
    const {date,totalSale,solicitations} = await SummaryOrders.findOne({date: today})
    // if (!orders) throw new NotFoundException('Orders does not exist');
    return res.status(HttpStatus.OK).json({date,totalSale,solicitations});
  }

  async refresh(req, res) {
    const stageWon = await PipeDriveService.getIdStageByName('Won')
    const dealsWon = await PipeDriveService.getDealsByStage(stageWon.id)  
    const solicitationsAdded = await BlingService.createSolicitations(dealsWon)
    const today = new Date().toJSON().slice(0, 10)

    let orders = await SummaryOrders.findOne({date: today})
    let solicitations = [];
    let totalSale = 0; 
    if (orders) {
      solicitations = orders.solicitations;
      totalSale = orders.totalSale;
    } else {
      orders = {}
    }

    solicitationsAdded.forEach(solicitation => {
      const { value, stage_change_time, products_count } = solicitation
      if (stage_change_time.slice(0, 10) === today) {
        solicitations.push(solicitation)
        totalSale += products_count * value;
      }
    });  

    orders.solicitations = solicitations;
    orders.totalSale = totalSale;
    orders.date = today;
    let ordersModel = new SummaryOrders(orders)
    await ordersModel.save()

    return res.status(HttpStatus.OK).json({'message':`Orders created : ${solicitationsAdded.length}`,'qtyCreated': solicitationsAdded.length});
  }
}

export default new SolicitationsController();