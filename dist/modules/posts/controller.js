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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models/");
const controller = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user, conteudo } = req.body;
            const newPost = yield models_1.Post.create({
                user,
                conteudo,
            });
            return res.status(201).json(newPost);
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const posts = await Post.find().populate("user"); // populate: receive info of which document will be populate
            const posts = yield models_1.Post.find().populate({
                path: "user",
                select: "nome",
            });
            return res.json(posts);
        });
    },
    /* async findOne(req: Request, res: Response) {
      const { id } = req.params;
      const post = await Post.findById(id);
  
      return res.json(post);
    },
  
    async update(req: Request, res: Response) {
      const { id } = req.params;
      const { user, conteudo } = req.body;
      const updated = await Post.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            user,
            conteudo
          },
        }
      );
  
      return res.sendStatus(204);
    },
    
    async delete(req: Request, res: Response) {
      const { id } = req.params;
      await Post.findByIdAndDelete(id)
  
      return res.sendStatus(204);
    } */
};
exports.default = controller;
