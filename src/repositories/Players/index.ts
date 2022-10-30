import DBClient from '../DBClient';

export default class PlayersRepository {
  private readonly db = DBClient.getInstance().prisma;

  async getAllPlayers() {
    return this.db.players.findMany();
  }

}