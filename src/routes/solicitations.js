import SolicitationsController from '../controllers/SolicitationsController.js';

export default (router, /*auth*/) => {
  // router.get('/solicitations/', OpportunitiesController.listAll);
    router.patch('/solicitations/refresh', SolicitationsController.refresh);
  // router.post('/opportunities/favorite', OpportunitiesController.insert);
  // router.put('/opportunities/:opportunitiesId',  OpportunitiesController.update);
  // router.delete('/opportunities/:opportunitiesId',  OpportunitiesController.delete);
};