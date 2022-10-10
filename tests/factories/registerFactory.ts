import prisma from "../../src/config/database";
import { faker } from "@faker-js/faker";

export async function registerFactory(userId, specieId) {
  const register = await prisma.registers.create({
    data: {
      userId,
      specieId,
      title: faker.lorem.words(4),
      longitude: faker.lorem.words(2),
      latitude: faker.lorem.words(2),
      observations: faker.lorem.words(20),
    }
  });

  return register;
}

export async function registerBodyFactory(specieId) {
  return {
    title: faker.lorem.words(4),
    longitude: faker.lorem.words(2),
    latitude: faker.lorem.words(2),
    observations: faker.lorem.words(20),
    specieId,
  }
}