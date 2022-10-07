import { Registers } from "@prisma/client";
import prisma from "../config/database";
import { TRegister } from "../types/registerType";

export async function createRegister(register: TRegister) {
  await prisma.registers.create({ data: register });
}

export async function getSpecieRegisters(specieId: number) {
  const registers: Registers[] = await prisma.registers.findMany({
    where: { specieId },
  });

  return registers;
}
