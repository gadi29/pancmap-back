import prisma from "../../src/config/database";
import { faker } from "@faker-js/faker";

export async function registerFactory(userId, specieId) {
  const register = await prisma.registers.create({
    data: {
      userId,
      specieId,
      title: faker.lorem.words(4),
      latitude: faker.datatype.number({min: -85, max: 85, precision: 0.000000001}),
      longitude: faker.datatype.number({min: -180, max: 180, precision: 0.000000001}),
      observations: faker.lorem.words(20),
    }
  });

  return register;
}

export async function registerBodyFactory(specieId) {
  return {
    title: faker.lorem.words(4),
    latitude: faker.datatype.number({min: -85, max: 85, precision: 0.000000001}),
    longitude: faker.datatype.number({min: -180, max: 180, precision: 0.000000001}),
    observations: faker.lorem.words(20),
    specieId,
  }
}