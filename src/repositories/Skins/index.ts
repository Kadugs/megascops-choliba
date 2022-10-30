import DBClient from '../DBClient';

export default class SkinsRepository {
  private readonly db = DBClient.getInstance().prisma;

  async createSkin(name: string, champion_uid: string) {
    const skin = await this.db.skin.create({
      data: {
        name,
        champion: {
          connect: {
            uid: champion_uid,
          },
        },
      },
    });
    return skin;
  }

  async getAllSkins() {
    return this.db.skins.findMany();
  }

  async getSkinByUid(uid: string) {
    return this.db.skins.findFirst({
      where: {
        uid,
      },
    });
  }

  async updateSkin(uid: string, body: unknown) {
    return this.db.players.update({
      where: {
        uid,
      },
      data: body,
    });
  }

  async getSkinsByChampion(champion_uid: string) {
    return this.db.skins.findMany({
      where: {
        champion_uid,
      },
    });
  }
}
