"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDB = void 0;
const Conection_1 = __importDefault(require("./Conection"));
const mongoDB = new Conection_1.default("mongodb://127.0.0.1:27017/treinamento"); // insert localhost: 127.0.0.1 and database name
exports.mongoDB = mongoDB;
