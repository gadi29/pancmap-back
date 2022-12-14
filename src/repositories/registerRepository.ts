import { Registers } from "@prisma/client";
import prisma from "../config/database";
import { TRegister, TRegisterData } from "../types/registerType";

export async function createRegister(register: TRegister) {
  await prisma.registers.create({ data: register });
}

export async function getAllRegisters() {
  const registers = await prisma.registers.findMany({
    select: {
      title: true,
      longitude: true,
      latitude: true,
      observations: true,
      specie: {
        select: {
          id: true,
          cientificName: true,
        },
      },
      user: {
        select: {
          name: true,
        }
      }
    },
  });

  return registers;
}

export async function getUserRegisters(userId: number) {
  const registers = await prisma.registers.findMany({
    where: { userId },
    select: {
      id: true,
      title: true,
      longitude: true,
      latitude: true,
      observations: true,
      specie: {
        select: {
          cientificName: true,
        },
      },
    },
  });

  return registers;
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

export async function getRegisterWithSpecie(id: number) {
  const register = await prisma.registers.findUnique({
    where: { id },
    select: {
      title: true,
      latitude: true,
      longitude: true,
      observations: true,
      specie: {
        select: {
          id: true,
          cientificName: true,
        },
      },
    },
  });

  return register;
}

export async function updateRegister(register: TRegisterData, id: number) {
  await prisma.registers.update({
    where: { id },
    data: {
      title: register.title,
      longitude: register.longitude,
      latitude: register.latitude,
      specieId: register.specieId,
      observations: register.observations,
    },
  });
}

export async function deleteRegister(id: number) {
  await prisma.registers.delete({ where: { id } });
}
