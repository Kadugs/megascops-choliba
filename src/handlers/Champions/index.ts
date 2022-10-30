import { Request, Response } from 'express';
import { createChampion } from '../../useCases/Champions/createChampion';
import { getChampionByUid } from '../../useCases/Champions/getChampionByUid';
import { listChampions } from '../../useCases/Champions/listChampions';

const listChampionsHandler = (req: Request, res: Response) => {
  try {
    const champions = listChampions();
    return res.send(champions);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getChampionByUidHandler = (req: Request, res: Response) => {
  try {
    const uid = req.params.uid;
    if(!uid){
      throw new Error('É necessário um Uid para buscar uma champion')
    }
    const champion = getChampionByUid(uid);
    return res.send(champion);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const createChampionHandler = (req: Request, res: Response) => {
  try {
    const body = req.body;
    if(!body.name){
      throw new Error('É necessário um nome para registrar um campeão')
    }
    const champion = createChampion(body.name);
    return res.send(champion);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export { listChampionsHandler, getChampionByUidHandler, createChampionHandler };