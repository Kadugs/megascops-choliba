import DBClient from '../DBClient';
import { updateBody } from '../../models/Players/updateBody';

export default class PlayersRepository {
  private readonly db = DBClient.getInstance().prisma;
  async createPlayer(summoner_name: string, username: string, password: string) {
    return this.db.players.create({
      data: {
        summoner_name,
        username,
        password
      }
    });
  }

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

  async updatePlayer(uid: string, body: updateBody) {
    return this.db.players.update({
      where: {
        uid
      },
      data: body,
    });
  }
}