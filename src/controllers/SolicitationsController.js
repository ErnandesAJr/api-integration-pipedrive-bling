import HttpStatus from 'http-status-codes';
import PipeDriveService from '../services/PipeDriveService.js'
// Isso deve ser do mongo
// import FavoriteLocation from '../database/models/FavoriteLocation';

// import { expectedFavoriteLocation } from '../validation';
// import { DuplicityException, NotFoundException, MapQuestException } from '../errors';


// import mapquest from '../utils/mapquest-linkid';

class SolicitationsController {

  // async get(req, res) {
  //   const { favoriteLocationId: id } = req.params;
  //   const favLocation = await FavoriteLocation.findOne({
  //     where: {
  //       id,
  //       user_id: req.user.id,
  //     },
  //   });
  //   if (!favLocation) throw new NotFoundException('Location does not exist');
  //   return res.status(HttpStatus.OK).json(favLocation);
  // }

  async refresh(req, res) {
    // 1 pegar o servico do PipeDrive e pegar todos os deals com Won
    const solicitationsWon = await PipeDriveService.getIdStageByName('Won')
    console.log(solicitationsWon)
    // 2 criar um pedido no Bling para cada deal no PipeDrive

    // 3 adicionar esse pedido 
    
    const favoriteLocations = await FavoriteLocation.findAll({
      where: {
        user_id: req.user.id,
      },
    });

    return res.status(HttpStatus.OK).json(favoriteLocations);
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