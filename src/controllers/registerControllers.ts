import { Request, Response } from "express";
import { TRegisterData } from "../types/registerType";
import * as registerServices from "../services/registerServices";
import { Registers } from "@prisma/client";

export async function createRegister(req: Request, res: Response) {
  const register: TRegisterData = req.body;
  const id: number = res.locals.user.id;

  await registerServices.createRegister(register, id);
  res.status(201).send("Register registered successfully");
}

export async function getAllRegisters(req: Request, res: Response) {
  const registers = await registerServices.getAllRegisters();

  res.status(200).send(registers);
}

export async function getUserRegisters(req: Request, res: Response) {
  const userId: number = +req.params.id;
  const registers = await registerServices.getUserRegisters(userId);

  res.status(200).send(registers);
}

export async function getSpecieRegisters(req: Request, res: Response) {
  const specieId: number = +req.params.id;

  const registers: Registers[] = await registerServices.getSpecieRegisters(
    specieId
  );
  res.status(200).send(registers);
}

export async function getRegister(req: Request, res: Response) {
  const registerId: number = +req.params.id;

  const register = await registerServices.getRegisterWithSpecie(registerId);
  res.status(200).send(register);
}

export async function updateRegister(req: Request, res: Response) {
  const registerData: TRegisterData = req.body;
  const registerId: number = +req.params.id;
  const userId: number = +res.locals.user.id;

  await registerServices.updateRegister(registerData, registerId, userId);
  res.status(200).send("Register successfully updated");
}

export async function deleteRegister(req: Request, res: Response) {
  const registerId: number = +req.params.id;
  const userId: number = +res.locals.user.id;

  await registerServices.deleteRegister(registerId, userId);
  res.status(200).send("Register deleted successfully");
}
