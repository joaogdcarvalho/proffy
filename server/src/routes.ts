import express from 'express';
import ClassesControllers from './controllers/classesController';

const routes = express.Router();
const classesControllers = new ClassesControllers();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

export default routes;