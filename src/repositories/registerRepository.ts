import { Registers } from "@prisma/client";
import prisma from "../config/database";
import { TRegister, TRegisterData } from "../types/registerType";

export async function createRegister(register: TRegister) {
  await prisma.registers.create({ data: register });
}

export async function getSpecieRegisters(specieId: number) {
  const registers: Registers[] = await prisma.registers.findMany({
    where: { specieId },
  });

  return registers;
}

export async function getRegisterById(id: number) {
  const register: Registers = await prisma.registers.findUnique({
    where: { id },
  });

  return register;
}

export async function updateRegister(
  register: TRegisterData,
  registerId: number
) {
  await prisma.registers.update({
    where: { id: registerId },
    data: {
      title: register.title,
      longitude: register.longitude,
      latitude: register.latitude,
      specieId: register.specieId,
      observations: register.observations,
    },
  });
}
