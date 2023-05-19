import { Router } from 'express';
import controller from './controller';

const routes = Router();

routes.post('/post', controller.create);
routes.get('/', controller.findAll);
//routes.get("/post/:id", controller.findOne);
//routes.put("/post/:id", controller.update);
//routes.delete("/post/:id", controller.delete);

export default routes;