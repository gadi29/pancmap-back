import { Species } from "@prisma/client";
import { Request, Response } from "express";
import * as specieServices from "../services/specieServices";

export async function createSpecie(req: Request, res: Response) {
  const specieData: Object = req.body;
  const pictures: Object = req.files;

  await specieServices.createSpecie(specieData, pictures);
  res.status(201).send("Specie registered successfully");
}

export async function getAllSpecies(req: Request, res: Response) {
  const species = await specieServices.getAllCientificNameSpecies();
  res.status(200).send(species);
}
