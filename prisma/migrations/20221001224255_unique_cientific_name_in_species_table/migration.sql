/*
  Warnings:

  - A unique constraint covering the columns `[cientificName]` on the table `Species` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Species_cientificName_key" ON "Species"("cientificName");
