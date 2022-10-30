import { Request, Response } from 'express';
import { getSkinByUid } from '../../useCases/Skins/getSkinByUid';
import { listSkins } from '../../useCases/Skins/listSkins';
import { createSkin } from '../../useCases/Skins/createSkin';
import { getSkinsByChampion } from '../../useCases/Skins/getSkinsByChampion';

const createSkinHandler = (req: Request, res: Response) => {
  try {
    const { name, champion_uid } = req.body;
    if(!name || !champion_uid){
      throw new Error('É necessário um nome e um campeão para criar uma skin')
    }
    const skin = createSkin(name, champion_uid);
    return res.send(skin);
  } catch (err) {
    return res.status(500).send(err);
  }  
}

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

const getSkinsByChampionHandler = (req: Request, res: Response) => {
  try {
    const champion_uid = req.params.uid;
    if(!champion_uid){
      throw new Error('É necessário um Uid de campeão para buscar suas skins')
    }
    const skins = getSkinsByChampion(champion_uid);
    return res.send(skins);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export { createSkinHandler, listSkinsHandler, getSkinByUidHandler, getSkinsByChampionHandler };
