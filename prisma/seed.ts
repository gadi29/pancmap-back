import prisma from "../src/config/database";
import { faker } from "@faker-js/faker"

async function main() {
  await prisma.users.createMany({
    data: [
      { name: "Number One",
        email: "numberone@email.com",
        password: faker.internet.password.toString(),
      },
      { name: "Number Two",
        email: "numbertwo@email.com",
        password: faker.internet.password.toString(),
      },
    ],
    skipDuplicates: true
  });

  await prisma.species.createMany({
    data: [
      {
        cientificName: "Specie One",
        generalCharacteristics: faker.lorem.words(10),
        leafMorfology: faker.lorem.words(20),
        flowerMorfology: faker.lorem.words(20),
        edibleParts: faker.lorem.words(10),
        leafPicturePath: faker.image.dataUri(),
        flowerPicturePath: faker.image.dataUri(),
      },
      {
        cientificName: "Specie Two",
        generalCharacteristics: faker.lorem.words(10),
        curiosities: faker.lorem.words(20),
        leafMorfology: faker.lorem.words(20),
        flowerMorfology: faker.lorem.words(20),
        fruitMorfology: faker.lorem.words(20),
        edibleParts: faker.lorem.words(10),
        leafPicturePath: faker.image.dataUri(),
        flowerPicturePath: faker.image.dataUri(),
        fruitPicturePath: faker.image.dataUri(),
      },
      {
        cientificName: "Specie Three",
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
      },
    ],
    skipDuplicates: true
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });