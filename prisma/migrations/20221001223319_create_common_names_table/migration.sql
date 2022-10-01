-- CreateTable
CREATE TABLE "CommonNames" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "specieId" INTEGER NOT NULL,

    CONSTRAINT "CommonNames_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CommonNames" ADD CONSTRAINT "CommonNames_specieId_fkey" FOREIGN KEY ("specieId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
