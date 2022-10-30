import PlayersRepository from '../../repositories/Players';

const createPlayer = (summoner_name: string, username: string, password: string) => {
  const playersRepository = new PlayersRepository();
  return playersRepository.createPlayer(summoner_name, username, password);
};

export { createPlayer };