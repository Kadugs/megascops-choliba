import ChampionsRepository from '../../repositories/Champions';

const listChampions = () => {
  const championsRepository = new ChampionsRepository();
  return championsRepository.getAllChampions();
};

export { listChampions };