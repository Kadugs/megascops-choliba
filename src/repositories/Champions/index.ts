import DBClient from '../DBClient';

export default class ChampionsRepository {
  private readonly db = DBClient.getInstance().prisma;

  async getAllChampions() {
    return this.db.champions.findMany();
  }
  async getChampionByUid(uid: string) {
    return this.db.champions.findFirst({
      where: {
        uid
      }
    });
  }
}
