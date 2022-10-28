import DBClient from '../DBClient';

export default class SkinsRepository {
  private readonly db = DBClient.getInstance().prisma;

  async getAllSkins() {
    return this.db.applications.findMany();
  }
}
