import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Users } from "@prisma/client";
import * as userRepository from "../repositories/userRepository";
import { TLoginUser, TSaveUser, TUserData } from "../types/userTypes";

async function getUserByEmail(email: string) {
  const user: Users = await userRepository.findByEmail(email);

  return user;
}

export async function getUserById(id: number) {
  const user: Users = await userRepository.findById(id);

  return user;
}

export async function signUp(newUser: TUserData) {
  const existUserInDB: Users = await getUserByEmail(newUser.email);
  if (existUserInDB !== null)
    throw { type: "conflict", message: "This email already exists" };

  const userData: TUserData = {
    ...newUser,
    password: passwordHash(newUser.password),
  };

  await userRepository.createNewUser(userData);

  return;
}

export async function signIn(userData: TLoginUser) {
  const userDB: Users = await getUserByEmail(userData.email);
  if (userDB === null) throw { type: "unauthorized", message: "Login error" };

  const passwordIsRight: boolean = bcrypt.compareSync(
    userData.password,
    userDB.password
  );
  if (!passwordIsRight) throw { type: "unauthorized", message: "Login error" };

  const token: string = generateToken({
    id: userDB.id,
    name: userDB.name,
    superuser: userDB.superuser,
  });

  return token;
}

function passwordHash(password: string) {
  const SALT: number = 10;
  const passwordHash: string = bcrypt.hashSync(password, SALT);

  return passwordHash;
}

function generateToken(user: TSaveUser) {
  const token: string = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "15 days",
  });

  return token;
}
