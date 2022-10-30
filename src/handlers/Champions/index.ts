import { Request, Response } from 'express';
import { listChampions } from '../../useCases/Champions/listChampions';

const listChampionsHandler = (req: Request, res: Response) => {
  try {
    const champions = listChampions();
    return res.send(champions);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export { listChampionsHandler };