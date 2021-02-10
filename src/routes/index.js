import solicitationsEndpoints from './solicitations.js';
import { Router } from 'express';

const router = new Router();

solicitationsEndpoints(router, /*auth*/);

export default router;