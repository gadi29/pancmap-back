import { Registers } from "@prisma/client";

export type TRegister = Omit<Registers, "id" | "createdAt">;
export type TRegisterData = Omit<Registers, "id" | "userId" | "createdAt">;
