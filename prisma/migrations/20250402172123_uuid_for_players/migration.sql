/*
  Warnings:

  - The primary key for the `players` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[name]` on the table `players` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "players" DROP CONSTRAINT "players_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "players_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "players_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "players_name_key" ON "players"("name");
