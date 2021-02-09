import { Router } from 'express';

// import SessionController from '../controllers/SessionController';
// import FileController from '../controllers/FileController';

// import auth from '../middleware/auth';

import opportunitiesEndpoints from './opportunities.js';

const router = new Router();

// router.post('/login', SessionController.generateToken);
// router.post('/file', uploader.single('file'), FileController.store);

opportunitiesEndpoints(router, /*auth*/);

export default router;