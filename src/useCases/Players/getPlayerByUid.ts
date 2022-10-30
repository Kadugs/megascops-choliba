import PlayersRepository from '../../repositories/Players';

const getPlayerByUid = (uid: string) => {
  const playersRepository = new PlayersRepository();
  return playersRepository.getPlayerByUid(uid);
};

export { getPlayerByUid };
