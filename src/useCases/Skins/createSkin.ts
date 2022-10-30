import SkinsRepository from '../../repositories/Skins';

const createSkin = (name: string, champion_uid: string) => {
  const skinsRepository = new SkinsRepository();
  return skinsRepository.createSkin(name, champion_uid);
};

export { createSkin };
