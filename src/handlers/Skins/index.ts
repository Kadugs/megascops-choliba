import { Request, Response } from 'express';
import { listSkins } from '../../useCases/Skins/listSkins';

const listSkinsHandler = (req: Request, res: Response) => {
  try {
    const skins = listSkins();
    return res.send(skins);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export { listSkinsHandler };
