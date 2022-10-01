import { Request, Response } from "express";
import * as userServices from "../services/userServices";

export async function signUp(req: Request, res: Response) {
  const newUser = req.body;

  await userServices.signUp(newUser);
  res.status(201).send("User registered successfully");
}
