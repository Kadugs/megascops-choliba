import { Request, Response } from 'express';
import { createPlayer } from '../../useCases/Players/createPlayer';
import { getPlayerByUid } from '../../useCases/Players/getPlayerByUid';
import { listPlayers } from '../../useCases/Players/listPlayers';
import { updatePlayer } from '../../useCases/Players/updatePlayer';

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

const createPlayerHandler = (req: Request, res: Response) => {
  try {
    const body = req.body;
    if(!body.summoner_name){
      throw new Error('É necessário um nome de invocador para registrar um jogador');
    }
    if(!body.username){
      throw new Error('É necessário um username para registrar um jogador');
    }
    if(!body.password){
      throw new Error('É necessário uma senha para registrar um jogador');
    }
    const player = createPlayer(body.summoner_name, body.username, body.password);
    return res.send(player);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const updatePlayerHandler = (req: Request, res: Response) => {
  try {
    const uid = req.params.uid;
    const body = req.body;
    if(!uid){
      throw new Error('É necessário um Uid para atualizar um jogador');
    }
    const player = updatePlayer(uid, body);
    return res.send(player);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export { createPlayerHandler, listPlayersHandler, getPlayerByUidHandler, updatePlayerHandler };
