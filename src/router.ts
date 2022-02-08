import { Request, Response, Router } from 'express';
import linkController from './controller/LinkController';

const router = Router();

router.get('/', (_req: Request, res: Response) =>
  res.sendFile(__dirname + '/views/index.html')
);

router.post('/generate', linkController.generate);

router.get('/:token', linkController.redirect);

export default router;
