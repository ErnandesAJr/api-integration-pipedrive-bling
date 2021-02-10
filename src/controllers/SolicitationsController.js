import HttpStatus from 'http-status-codes';
import PipeDriveService from '../services/PipeDriveService.js'
import BlingService from '../services/BlingService.js';
import SummaryOrders from '../database/models/SummaryOrders.js'
// Isso deve ser do mongo
// import FavoriteLocation from '../database/models/FavoriteLocation';

// import { expectedFavoriteLocation } from '../validation';
// import { DuplicityException, NotFoundException, MapQuestException } from '../errors';


// import mapquest from '../utils/mapquest-linkid';

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

  // async insert(req, res) {
  //   const newFavLocation = req.body;
  //   await expectedFavoriteLocation.validate(newFavLocation);

  //   const [longitude, latitude] = newFavLocation.location.coordinates;
  //   const [streetName, linkId] = await mapquest.getLinkId(latitude, longitude);
  //   if (!linkId || linkId === 0) throw new MapQuestException();

  //   const favLocationExists = await FavoriteLocation.findOne({
  //     where: {
  //       linkId,
  //       user_id: req.user.id,
  //     },
  //   });
  //   if (favLocationExists) throw new DuplicityException('That favorite location is already saved');

  //   newFavLocation.linkId = linkId;
  //   newFavLocation.user_id = req.user.id;
  //   if (!newFavLocation.description) newFavLocation.description = streetName;

  //   const favoriteLocation = await FavoriteLocation.create(newFavLocation);
  //   return res.status(HttpStatus.CREATED).json(favoriteLocation);
  // }

  // async update(req, res) {
  //   const { favoriteLocationId: id } = req.params;
  //   const favLocation = await FavoriteLocation.findOne({
  //     where: {
  //       id,
  //       user_id: req.user.id,
  //     },
  //   });
  //   if (!favLocation) throw new NotFoundException('Location does not exist');

  //   await expectedFavoriteLocation.validate(req.body);
  //   await favLocation.update(req.body);
  //   return res.status(HttpStatus.OK).json(favLocation);
  // }

  // async delete(req, res) {
  //   const { favoriteLocationId: id } = req.params;
  //   const favLocation = await FavoriteLocation.findOne({
  //     where: {
  //       id,
  //       user_id: req.user.id,
  //     },
  //   });
  //   if (!favLocation) throw new NotFoundException('Location does not exist');

  //   favLocation.destroy();
  //   return res.status(HttpStatus.OK);
  // }
}

export default new SolicitationsController();