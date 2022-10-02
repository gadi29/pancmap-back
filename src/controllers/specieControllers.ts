import { Users } from "@prisma/client";
import { Request, Response } from "express";
import { TSpecieData } from "../types/specieType";

export async function createSpecie(req: Request, res: Response) {
  const specie: TSpecieData = req.body;
  const user: Users = res.locals.user;

  //service
  res.status(201).send("Specie registered successfully");
}
