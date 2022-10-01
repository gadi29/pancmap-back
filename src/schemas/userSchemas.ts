import Joi from "joi";
import { TUserData } from "../types/userTypes";

export const newUserSchema = Joi.object<TUserData>({
  name: Joi.string().trim().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  superuser: Joi.boolean(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
