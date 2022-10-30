import DBClient from '../DBClient';

export default class ChampionsRepository {
  private readonly db = DBClient.getInstance().prisma;

  async getAllChampions() {
    return this.db.champions.findMany();
  }
}
