import { Species } from "@prisma/client";

export type TSpecieData = Omit<
  Species,
  "id" | "createdAt" | "curiosities" | "undergroundPicturePath"
> & {
  curiosities?: string;
  undergroundPicturePath?: string;
};

export type TSpecieText = Omit<
  TSpecieData,
  | "leafPicturePath"
  | "flowerPicturePath"
  | "fruitPicturePath"
  | "undergroundPicturePath"
  | "curiosities"
> & { curiosities?: string };

export type TSpeciePaths = Omit<
  TSpecieData,
  | "cientificName"
  | "generalCharacteristics"
  | "curiosities"
  | "leafMorfology"
  | "flowerMorfology"
  | "fruitMorfology"
  | "undergroundMorfology"
  | "undergroundPicturePath"
  | "edibleParts"
> & { undergroundPicturePath?: string };
