import SolicitationsController from '../controllers/SolicitationsController.js';

export default (router, /*auth*/) => {
  router.get('/solicitations', SolicitationsController.get);
  router.patch('/solicitations/refresh', SolicitationsController.refresh);
};