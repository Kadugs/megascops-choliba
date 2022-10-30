import SkinsRepository from '../../repositories/Skins';

const createSkin = () => {
  const skinsRepository = new SkinsRepository();
  return skinsRepository.createSkin();
};

export { createSkin };
