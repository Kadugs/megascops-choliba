import { Request, Response } from 'express';
import { getSkinByUid } from '../../useCases/Skins/getSkinByUid';
import { listSkins } from '../../useCases/Skins/listSkins';

const listSkinsHandler = (req: Request, res: Response) => {
  try {
    const skins = listSkins();
    return res.send(skins);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getSkinByUidHandler = (req: Request, res: Response) => {
  try {
    const uid = req.params.uid;
    if(!uid){
      throw new Error('É necessário um Uid para buscar uma skin')
    }
    const skin = getSkinByUid(uid);
    return res.send(skin);
  } catch (err) {
    return res.status(500).send(err);
  }
};


export { listSkinsHandler, getSkinByUidHandler };
