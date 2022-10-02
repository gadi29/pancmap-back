import { Request, Response } from "express";
import { TSpecieData } from "../types/specieType";
import * as specieServices from "../services/specieServices";

export async function createSpecie(req: Request, res: Response) {
  const specie: TSpecieData = req.body;

  await specieServices.createSpecie(specie);
  res.status(201).send("Specie registered successfully");
}
