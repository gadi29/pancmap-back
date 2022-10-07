/*
  Warnings:

  - You are about to drop the column `coordinates` on the `Registers` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `Registers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Registers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Registers" DROP COLUMN "coordinates",
ADD COLUMN     "latitude" TEXT NOT NULL,
ADD COLUMN     "longitude" TEXT NOT NULL;
