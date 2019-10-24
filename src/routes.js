import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/register', UserController.store);

routes.post('/login', SessionController.store);
routes.post('/register-avatar', upload.single('file'), FileController.store);
routes.use(authMiddleware);

routes.put('/update-user', UserController.update);
export default routes;
