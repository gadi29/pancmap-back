import { Request, Response } from "express";

export async function signUp(req: Request, res: Response) {
  const newUser = req.body;

  //userService
  res.status(201).send("User registered successfully");
}
