import { TSpecieData, TSpeciePaths, TSpecieText } from "../types/specieType";
import * as specieRepository from "../repositories/specieRepository";
import { Registers, Species } from "@prisma/client";
import { getSpecieRegisters } from "./registerServices";

export async function createSpecie(specie: TSpecieData) {
  const existSpecie = await getSpecieByName(specie.cientificName);
  if (existSpecie !== null)
    throw { type: "conflict", message: "This specie already exists" };

  await specieRepository.createSpecie(specie);

  return;
}

export async function getAllCientificNameSpecies() {
  const species = await specieRepository.getAllCientificNameSpecies();

  return species;
}

async function getSpecieByName(name: string) {
  const specie: Species = await specieRepository.findByName(name);

  return specie;
}

export async function getSpecieById(id: number) {
  const specie: Species = await specieRepository.findById(id);

  if (specie === null)
    throw {
      type: "not_found",
      message: "Espécie não encontrada",
    };

  return specie;
}

export async function updateSpecie(specie: TSpecieData, id: number) {
  await specieRepository.updateSpecie(specie, id);

  return;
}

export async function deleteSpecie(id: number) {
  const specie: Species = await getSpecieById(id);
  const specieRegisters: Registers[] = await getSpecieRegisters(id);

  if (specieRegisters.length >= 1)
    throw {
      type: "conflict",
      message: "Existem registros cadastrados para esta espécie",
    };

  await specieRepository.deleteSpecieById(id);

  return;
}
