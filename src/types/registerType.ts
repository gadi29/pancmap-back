import { Registers } from "@prisma/client";

export type TRegisterData = Omit<Registers, "id" | "createdAt">;
