import SkinsRepository from '../../repositories/Skins';

const getSkinsByChampion = (champion_uid: string) => {
  const skinsRepository = new SkinsRepository();
  return skinsRepository.getSkinsByChampion(champion_uid);
};

export { getSkinsByChampion };
