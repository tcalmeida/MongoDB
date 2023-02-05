import { Router } from "express";
import useRoutes from "../../modules/users/routes";

const routes = Router();

routes.use(useRoutes);

export default routes;
