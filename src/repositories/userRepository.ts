import { Users } from "@prisma/client";
import prisma from "../config/database";

export async function findByEmail(email: string) {
  const user: Users = await prisma.users.findUnique({ where: { email } });

  return user;
}
