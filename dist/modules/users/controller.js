"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../models/User"));
const controller = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, senha } = req.body;
            const newUser = yield User_1.default.create({
                nome,
                email,
                senha,
            });
            return res.status(201).json(newUser);
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User_1.default.find();
            return res.json(users);
        });
    },
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield User_1.default.findById(id);
            return res.json(user);
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nome, email } = req.body;
            const updated = yield User_1.default.updateOne({
                _id: id,
            }, {
                $set: {
                    nome,
                    email,
                },
            });
            return res.sendStatus(204);
        });
    },
    //async delete(req: Request, res: Response) {}
};
exports.default = controller;
