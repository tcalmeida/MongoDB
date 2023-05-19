import { Request, Response } from 'express';
import { Post } from '../../models/';
import MESSAGE from '../../constants/messages';

class controller {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { user, content } = req.body;
      const newPost = await Post.create({
        user,
        content,
      });
      return res.status(201).json(newPost);
    } catch (error) {
      return res.status(400).json({ message: MESSAGE.ERROR.REGISTER.USER });
    }
  };

  static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const posts = await Post.find().populate({
        path: 'user',
        select: 'name',
      });
      return res.json(posts);
    } catch (error) {
      return res.status(500).json({ message: MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static findOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);
      return res.json(post);
    } catch (error) {
      return res.status(500).json({ message: MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const { user, content } = req.body;
      await Post.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            user,
            content,
          },
        }
      );
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: MESSAGE.ERROR.UPDATE_REGISTER });
    }
  };

  static delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      await Post.findByIdAndDelete(id);
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: MESSAGE.ERROR.DELETE });
    }
  };
}

export default controller;
