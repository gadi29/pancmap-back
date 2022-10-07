import { Request, Response } from "express";
import { TRegisterData } from "../types/registerType";
import * as registerServices from "../services/registerServices";

export async function createRegister(req: Request, res: Response) {
  const register: TRegisterData = req.body;
  const id: number = res.locals.user.id;

  await registerServices.createRegister(register, id);
  res.status(201).send("Register registered successfully");
}
