import prisma from "../../src/config/database";

export async function deleteAllData() {
  await prisma.$transaction([
    prisma.$executeRaw`TRUNCATE TABLE "Registers" CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "Users" CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "Species" CASCADE`,
  ]);
}

export async function disconnectPrisma() {
  await prisma.$disconnect();
}