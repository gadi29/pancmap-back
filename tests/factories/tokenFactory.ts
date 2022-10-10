import jwt from "jsonwebtoken";

export async function tokenFactory(user) {
  return jwt.sign({ user }, process.env.JWT_SECRET);
}