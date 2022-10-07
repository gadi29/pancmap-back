import { TRegister, TRegisterData } from "../types/registerType";
import * as registerRepository from "../repositories/registerRepository";
import { getSpecieById } from "./specieServices";
import { getUserById } from "./userServices";
import { Registers, Users } from "@prisma/client";

export async function createRegister(register: TRegisterData, id: number) {
  await getSpecieById(register.specieId);
  const user: Users = await getUserById(id);
  if (user === null)
    throw {
      type: "not_found",
      message: "Usuário não encontrado",
    };

  const registerData: TRegister = { ...register, userId: id };
  await registerRepository.createRegister(registerData);

  return;
}

export async function getSpecieRegisters(specieId: number) {
  await getSpecieById(specieId);
  const registers: Registers[] = await registerRepository.getSpecieRegisters(
    specieId
  );

  return registers;
}
