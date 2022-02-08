import dotenv from 'dotenv';
import randomstring from 'randomstring';
import { Request, Response } from 'express';
import LinkModel from '../models/LinkModel';

dotenv.config()
const { DOMAIN } = process.env

export class LinkController {
  async generate(req: Request, res: Response) {
    try {
      const token = randomstring.generate(5)

      await LinkModel.create({ url: req.body.url, token });

      res.json({ link: DOMAIN + token });
    } catch (error) {
      console.log(error);
    }
  }

  async redirect(req: Request, res: Response) {
    try {
      const model = await LinkModel.findOne({ token: req.params.token })

      if (!model) {
        res.send('<h1>404 Cсылка не найдена</h1>')
      }

      res.redirect(model.url)
    } catch (error) {
      console.log(error)
    }
  }
}

export default new LinkController();