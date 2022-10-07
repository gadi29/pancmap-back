import { Species } from "@prisma/client";
import { Request, Response } from "express";
import * as specieServices from "../services/specieServices";
import { TSpecieData, TSpecieText } from "../types/specieType";

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

export async function getSpecie(req: Request, res: Response) {
  const id: number = +req.params.id;

  const specie: Species = await specieServices.getSpecieById(id);
  res.status(200).send(specie);
}

export async function updateSpecie(req: Request, res: Response) {
  const id: number = +req.params.id;
  const specie: TSpecieText = req.body;

  await specieServices.updateSpecie(specie, id);
  res.status(200).send("Specie successfully updated");
}

export async function deleteSpecie(req: Request, res: Response) {
  const id: number = +req.params.id;

  await specieServices.deleteSpecie(id);
  res.status(200).send("Specie deleted successfully");
}
