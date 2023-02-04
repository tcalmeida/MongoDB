import { Router } from "express";
import controller from "./controller";

const routes = Router();

routes.post("/user", controller.create);
routes.get("/user", controller.findAll);
routes.get("/user/:id", controller.findOne);

export default routes;
