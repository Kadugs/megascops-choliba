import { Request, Response } from 'express';
import { listPlayers } from '../../useCases/Players/listPlayers';

const listPlayersHandler = (req: Request, res: Response) => {
  try {
    const players = listPlayers();
    return res.send(players);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export { listPlayersHandler };