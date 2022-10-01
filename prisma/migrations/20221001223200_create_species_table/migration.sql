-- CreateTable
CREATE TABLE "Species" (
    "id" SERIAL NOT NULL,
    "cientificName" TEXT NOT NULL,
    "generalCharacteristics" TEXT NOT NULL,
    "curiosities" TEXT,
    "leafMorfology" TEXT NOT NULL,
    "flowerMorfology" TEXT NOT NULL,
    "fruitMorfology" TEXT NOT NULL,
    "undergroundMorfology" TEXT NOT NULL,
    "leafPicturePath" TEXT NOT NULL,
    "flowerPicturePath" TEXT NOT NULL,
    "fruitPicturePath" TEXT NOT NULL,
    "undergraundPicturePath" TEXT,
    "edibleParts" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Species_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Registers" ADD CONSTRAINT "Registers_specieId_fkey" FOREIGN KEY ("specieId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
