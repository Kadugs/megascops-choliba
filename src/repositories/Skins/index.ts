import DBClient from '../DBClient';

export default class SkinsRepository {
  private readonly db = DBClient.getInstance().prisma;

  async getAllSkins() {
    return this.db.skins.findMany();
  }

  async getSkinByUid(uid: string) {
    return this.db.skins.findFirst({
      where: {
        uid
      }
    });
  }

}
