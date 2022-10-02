import { Users } from "@prisma/client";
import prisma from "../config/database";
import { TUserData } from "../types/userTypes";

export async function findByEmail(email: string) {
  const user: Users = await prisma.users.findUnique({ where: { email } });

  return user;
}

export async function findById(id: number) {
  const user: Users = await prisma.users.findUnique({ where: { id } });

  return user;
}

export async function createNewUser(newUser: TUserData) {
  await prisma.users.create({ data: newUser });
}
