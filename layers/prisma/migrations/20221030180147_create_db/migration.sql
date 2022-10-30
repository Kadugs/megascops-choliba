-- CreateTable
CREATE TABLE "skins" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "champion_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "skins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "champions" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "champions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "players" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "summoner_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "players_skins" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "skin_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "players_skins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "skins_uid_key" ON "skins"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "champions_uid_key" ON "champions"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "players_uid_key" ON "players"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "players_skins_uid_key" ON "players_skins"("uid");

-- AddForeignKey
ALTER TABLE "skins" ADD CONSTRAINT "skins_champion_id_fkey" FOREIGN KEY ("champion_id") REFERENCES "champions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "players_skins" ADD CONSTRAINT "players_skins_skin_id_fkey" FOREIGN KEY ("skin_id") REFERENCES "skins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "players_skins" ADD CONSTRAINT "players_skins_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
