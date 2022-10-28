import { getAllSkins } from '../repositories/skinsRepository.ts';

const listSkins = () => {
  const skins = getAllSkins();
};

export { listSkins };
