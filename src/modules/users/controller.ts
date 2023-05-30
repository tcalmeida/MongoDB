import { Request, Response } from 'express';
import { User } from '../../models';
import MESSAGE from '../../constants/messages';

class controller {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, email, password } = req.body;
      const newUser = await User.create({
        name,
        email,
        password,
      });
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({ message: MESSAGE.ERROR.REGISTER.USER });
    }
  };

  static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ message: MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static findOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      await User.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            name,
            email,
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
      await User.findByIdAndDelete(id);
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: MESSAGE.ERROR.DELETE });
    }
  };
}

export default controller;
