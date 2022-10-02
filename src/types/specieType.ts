import { Species } from "@prisma/client";

export type TSpecieData = Omit<Species, "id" | "createdAt">;
