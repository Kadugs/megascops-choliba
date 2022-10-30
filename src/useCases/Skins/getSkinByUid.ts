import SkinsRepository from '../../repositories/Skins';

const getSkinByUid = (uid: string) => {
  const skinsRepository = new SkinsRepository();
  return skinsRepository.getSkinByUid(uid);
};

export { getSkinByUid };
