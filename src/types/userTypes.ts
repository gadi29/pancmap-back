import { Users } from "@prisma/client";

export type TUserData = Omit<Users, "id" | "createdAt">;

export type TLoginUser = Omit<Users, "id" | "name" | "superuser" | "createdAt">;

export type TSaveUser = Omit<Users, "email" | "password" | "createdAt">;
