import DBClient from '../DBClient';

export default class PlayersRepository {
  private readonly db = DBClient.getInstance().prisma;

  async getAllPlayers() {
    return this.db.players.findMany();
  }

  async getPlayerByUid(uid: string) {
    return this.db.players.findFirst({
      where: {
        uid
      }
    });
  }
}