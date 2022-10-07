import { Request, Response } from "express";
import * as userServices from "../services/userServices";
import { TLoginUser, TUserData, TUserDataCP } from "../types/userTypes";

export async function signUp(req: Request, res: Response) {
  const newUser: TUserDataCP = req.body;

  await userServices.signUp(newUser);
  res.status(201).send("User registered successfully");
}

export async function signIn(req: Request, res: Response) {
  const userData: TLoginUser = req.body;

  const data = await userServices.signIn(userData);
  res.status(200).send(data);
}
