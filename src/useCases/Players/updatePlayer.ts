import PlayersRepository from '../../repositories/Players';
import { updateBody } from '../../models/Players/updateBody';
const updatePlayer = async (uid: string, body: updateBody) => {
  const playersRepository = new PlayersRepository();
  const updatedPlayer = await playersRepository.updatePlayer(uid, body);
  delete updatedPlayer.password;
  return updatedPlayer;
};

export { updatePlayer };