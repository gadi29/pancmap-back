import { Species } from "@prisma/client";

export type TSpecie = Omit<Species, "id" | "createdAt">;

export type TPicturesPath = Partial<TSpecie>;

export type TSpecieData = Omit<
  TSpecie,
  | "leafPicturePath"
  | "flowerPicturePath"
  | "fruitPicturePath"
  | "undergroundPicturePath"
>;

export type TSpecieObj = Partial<TSpecieData>;
