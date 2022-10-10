import prisma from "../../src/config/database";
import { faker } from "@faker-js/faker";

export async function specieFactory() {
  const specie = await prisma.species.create({
    data: {
      cientificName: faker.lorem.words(2),
      generalCharacteristics: faker.lorem.words(10),
      curiosities: faker.lorem.words(20),
      leafMorfology: faker.lorem.words(20),
      flowerMorfology: faker.lorem.words(20),
      fruitMorfology: faker.lorem.words(20),
      undergroundMorfology: faker.lorem.words(20),
      edibleParts: faker.lorem.words(10),
      leafPicturePath: faker.image.dataUri(),
      flowerPicturePath: faker.image.dataUri(),
      fruitPicturePath: faker.image.dataUri(),
      undergroundPicturePath: faker.image.dataUri(),
    }
  });

  return specie;
}

export function specieBodyFactory() {
  return {
    cientificName: faker.lorem.words(2),
    generalCharacteristics: faker.lorem.words(10),
    curiosities: faker.lorem.words(20),
    leafMorfology: faker.lorem.words(20),
    flowerMorfology: faker.lorem.words(20),
    fruitMorfology: faker.lorem.words(20),
    undergroundMorfology: faker.lorem.words(20),
    edibleParts: faker.lorem.words(10),
    leafPicturePath: faker.image.dataUri(),
    flowerPicturePath: faker.image.dataUri(),
    fruitPicturePath: faker.image.dataUri(),
    undergroundPicturePath: faker.image.dataUri(),
  };
}