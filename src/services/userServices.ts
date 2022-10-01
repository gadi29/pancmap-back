import { TUserData } from "../types/userTypes";
import bcrypt from "bcrypt";

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
