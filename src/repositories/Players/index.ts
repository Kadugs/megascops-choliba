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

  async createPlayer(summoner_name: string, username: string, password: string) {
    return this.db.players.create({
      data: {
        summoner_name,
        username,
        password
      }
    });
  }
}