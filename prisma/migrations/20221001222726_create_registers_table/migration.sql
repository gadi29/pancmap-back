-- CreateTable
CREATE TABLE "Registers" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "coordinates" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "specieId" INTEGER NOT NULL,
    "picturePath" TEXT NOT NULL,
    "observations" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Registers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Registers" ADD CONSTRAINT "Registers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
