import { TUserData } from "../types/userTypes";
import bcrypt from "bcrypt";
import { Users } from "@prisma/client";
import * as userRepository from "../repositories/userRepository";

async function getUserByEmail(email: string) {
  const user: Users = await userRepository.findByEmail(email);

  return user;
}

export async function signUp(newUser: TUserData) {
  //confirm email

  const userData: TUserData = {
    ...newUser,
    password: passwordHash(newUser.password),
  };

  //repository

  return;
}

function passwordHash(password: string) {
  const SALT: number = 10;
  const passwordHash: string = bcrypt.hashSync(password, SALT);

  return passwordHash;
}
