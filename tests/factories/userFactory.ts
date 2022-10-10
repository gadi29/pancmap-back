import prisma from "../../src/config/database";
import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

export async function userFactory(user) {
  const createdUser = await prisma.users.create({
    data: {
      ...user,
      superuser: false,
      password: bcrypt.hashSync(user.password, 10)
    }
  });

  return createdUser;
}

export async function superUserFactory(user) {
  const createdUser = await prisma.users.create({
    data: {
      ...user,
      superuser:true,
      password: bcrypt.hashSync(user.password, 10),
    }
  });

  return createdUser;
}

export function userBodyFactory() {
  return {
    name: faker.fake.name,
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}