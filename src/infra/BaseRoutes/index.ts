import { Router } from "express";
import userRoutes from "../../modules/users/routes";
import postRoutes from "../../modules/posts/routes";

const routes = Router();

routes.use(userRoutes);
routes.use(postRoutes);

export default routes;
