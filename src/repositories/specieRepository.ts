import { Species } from "@prisma/client";
import prisma from "../config/database";
import { TSpecieData, TSpecieText } from "../types/specieType";

export async function findByName(name: string) {
  const specie: Species = await prisma.species.findUnique({
    where: { cientificName: name },
  });

  return specie;
}

export async function findById(id: number) {
  const specie: Species = await prisma.species.findUnique({ where: { id } });

  return specie;
}

export async function createSpecie(specie: TSpecieData) {
  await prisma.species.create({ data: specie });
}

export async function getAllCientificNameSpecies() {
  const species = await prisma.species.findMany({
    select: {
      id: true,
      cientificName: true,
    },
  });

  return species;
}

export async function updateSpecie(specie: TSpecieData, id: number) {
  await prisma.species.update({
    where: { id },
    data: specie,
  });
}

export async function deleteSpecieById(id: number) {
  await prisma.species.delete({ where: { id } });
}
