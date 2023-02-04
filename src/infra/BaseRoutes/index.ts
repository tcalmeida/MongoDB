import { Router } from "express";
import { User } from "../../models";

const routes = Router();

routes.get("/user", async (req, res, next) => {
  
    //for stored an information inside database. Sending a json object format wich was defined
  await User.create({
    nome: "Thiago",
    email: "thiago@email.com",
    senha: "1234",
  });
  return res.json("OK");
});

export default routes;
