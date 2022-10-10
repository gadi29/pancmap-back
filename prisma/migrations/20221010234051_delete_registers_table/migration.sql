/*
  Warnings:

  - You are about to drop the `Registers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Registers" DROP CONSTRAINT "Registers_specieId_fkey";

-- DropForeignKey
ALTER TABLE "Registers" DROP CONSTRAINT "Registers_userId_fkey";

-- DropTable
DROP TABLE "Registers";
