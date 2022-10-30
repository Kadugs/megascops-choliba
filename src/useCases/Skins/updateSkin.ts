import SkinsRepository from '../../repositories/Skins';

type request = {
  uid: string;
  body: unknown;
};

const updateSkin = ({ uid, body }: request) => {
  const skinsRepository = new SkinsRepository();
  return skinsRepository.updateSkin(uid, body);
};

export { updateSkin };
