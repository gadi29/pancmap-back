import { Request, Response } from "express";
import { TRegisterData } from "../types/registerType";
import * as registerServices from "../services/registerServices";

export async function createRegister(req: Request, res: Response) {
  const register: TRegisterData = req.body;
  const { id } = res.locals.user;

  await registerServices.createRegister(register, id);
  res.status(201).send("Register registered successfully");
}
