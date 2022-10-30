import ChampionsRepository from '../../repositories/Champions';

const createChampion = (name: string) => {
  const championsRepository = new ChampionsRepository();
  return championsRepository.createChampion(name);
};

export { createChampion };