import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProjectController from './app/controllers/ProjectController';
import SensorController from './app/controllers/SensorController';
import MeasurementController from './app/controllers/MeasurementController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/register', UserController.store);

routes.post('/login', SessionController.store);

routes.use(authMiddleware);

routes.put('/update-user', UserController.update);

routes.get('/list-projects', ProjectController.index);
routes.post('/create-project', ProjectController.store);
routes.put('/update-project', ProjectController.update);

routes.post('/create-sensor', SensorController.store);
routes.put('/update-sensor', SensorController.update);

routes.get('/list-measurement', MeasurementController.index);
routes.post('/create-measurement', MeasurementController.store);
routes.put('/update-measurement', MeasurementController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
