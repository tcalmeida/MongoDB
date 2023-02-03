import Express, { Application } from "express";
import { mongoDB } from "../database";
//import BaseRoutes from "./BaseRoutes";
import mongoose from "mongoose";

type SetupOptions = {
  isTest?: boolean;
  port?: number;
};
export default class App {
  private instance: Application;
  private defaultPort: number = 4000;

  constructor() {
    this.instance = Express();
  }

  setup(options: SetupOptions): void {
    
    mongoose.set("strictQuery", false); // remove depreciation warning from Mongoose (node:11392)
    mongoDB.createConnection();
    const selectedPort = options.port ? options.port : this.defaultPort;
    this.instance.use(Express.json());
    //this.instance.use(BaseRoutes);

    if (options.isTest) return;

    this.instance.listen(selectedPort, () =>
      console.log(`Server running on PORT: ${selectedPort}`)
    );
  }

  getInstance() {
    return this.instance;
  }
}
