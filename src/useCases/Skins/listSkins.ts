import SkinsRepository from '../../repositories/Skins';

const listSkins = () => {
  const skinsRepository = new SkinsRepository();
  return skinsRepository.getAllSkins();
};

export { listSkins };
