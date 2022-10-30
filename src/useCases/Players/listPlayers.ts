import PlayersRepository from '../../repositories/Players';

const listPlayers = () => {
  const playersRepository = new PlayersRepository();
  return playersRepository.getAllPlayers();
};

export { listPlayers };