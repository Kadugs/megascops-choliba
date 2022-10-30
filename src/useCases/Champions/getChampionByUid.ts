import ChampionsRepository from '../../repositories/Champions';

const getChampionByUid = (uid: string) => {
  const championsRepository = new ChampionsRepository();
  return championsRepository.getChampionByUid(uid);
};

export { getChampionByUid };