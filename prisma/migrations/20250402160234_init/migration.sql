-- CreateTable
CREATE TABLE "players" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "gamesPlayed" INTEGER NOT NULL DEFAULT 0,
    "gamesWon" INTEGER NOT NULL DEFAULT 0,
    "gamesLost" INTEGER NOT NULL DEFAULT 0,
    "goalsScored" INTEGER NOT NULL DEFAULT 0,
    "goalsConceeded" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);
