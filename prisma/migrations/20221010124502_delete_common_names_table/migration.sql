/*
  Warnings:

  - You are about to drop the `CommonNames` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CommonNames" DROP CONSTRAINT "CommonNames_specieId_fkey";

-- DropTable
DROP TABLE "CommonNames";
