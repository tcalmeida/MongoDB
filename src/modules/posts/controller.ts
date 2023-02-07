import { Request, Response } from "express";
import { Post } from "../../models/";

const controller = {
  async create(req: Request, res: Response) {
    const { user, conteudo } = req.body;

    const newPost = await Post.create({
      user,
      conteudo,
    });
    return res.status(201).json(newPost);
  },

  async findAll(req: Request, res: Response) {
    //const posts = await Post.find().populate("user"); // populate: receive info of which document will be populate
    const posts = await Post.find().populate({          // populate especific itens :receive info of which propriety and itens will be populate
      path: "user",
      select: "nome",
    });

    return res.json(posts);
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

export default controller;
