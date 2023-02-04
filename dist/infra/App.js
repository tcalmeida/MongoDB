"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("../database");
const BaseRoutes_1 = __importDefault(require("./BaseRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
class App {
    constructor() {
        this.defaultPort = 4000;
        this.instance = (0, express_1.default)();
    }
    setup(options) {
        mongoose_1.default.set("strictQuery", false); // remove depreciation warning from Mongoose (node:11392)
        database_1.mongoDB.createConnection();
        const selectedPort = options.port ? options.port : this.defaultPort;
        this.instance.use(express_1.default.json());
        this.instance.use(BaseRoutes_1.default);
        if (options.isTest)
            return;
        this.instance.listen(selectedPort, () => console.log(`Server running on PORT: ${selectedPort}`));
    }
    getInstance() {
        return this.instance;
    }
}
exports.default = App;
