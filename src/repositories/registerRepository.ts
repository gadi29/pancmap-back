import prisma from "../config/database";
import { TRegister } from "../types/registerType";

export async function createRegister(register: TRegister) {
  await prisma.registers.create({ data: register });
}
