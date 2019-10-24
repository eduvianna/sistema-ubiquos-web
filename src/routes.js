import { Router } from 'express';
import auth from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/register', UserController.store);

routes.post('/login', SessionController.store);

routes.use(auth);

routes.put('/update-user', UserController.update);
export default routes;
