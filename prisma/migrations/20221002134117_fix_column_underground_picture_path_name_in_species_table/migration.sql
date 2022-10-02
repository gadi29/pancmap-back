/*
  Warnings:

  - You are about to drop the column `undergraundPicturePath` on the `Species` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Species" DROP COLUMN "undergraundPicturePath",
ADD COLUMN     "undergroundPicturePath" TEXT;
