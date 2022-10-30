import { Request, Response } from 'express';
import { getPlayerByUid } from '../../useCases/Players/getPlayerByUid';
import { listPlayers } from '../../useCases/Players/listPlayers';

const listPlayersHandler = (req: Request, res: Response) => {
  try {
    const players = listPlayers();
    return res.send(players);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getPlayerByUidHandler = (req: Request, res: Response) => {
  const uid = req.params.uid;
  if (!uid) {
    throw new Error('É necessário um Uid para buscar um player');
  }
  try {
    const players = getPlayerByUid(uid);
    return res.send(players);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export { listPlayersHandler, getPlayerByUidHandler };
