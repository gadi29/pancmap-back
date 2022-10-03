import { Species } from "@prisma/client";
import prisma from "../config/database";

export async function findByName(name: string) {
  const specie: Species = await prisma.species.findUnique({
    where: { cientificName: name },
  });

  return specie;
}
