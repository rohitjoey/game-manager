import { PrismaClient } from "../../generated/prisma";

declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;

prisma = new PrismaClient();

export const db = prisma;
