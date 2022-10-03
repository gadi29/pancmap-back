import { Species } from "@prisma/client";

export type TSpecie = Omit<Species, "id" | "createdAt">;

export type TSpecieData = Omit<
  TSpecie,
  | "leafPicturePath"
  | "flowerPicturePath"
  | "fruitPicturePath"
  | "undergroundPicturePath"
>;
