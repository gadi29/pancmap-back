import Joi from "joi";
import { TLoginUser, TUserDataCP } from "../types/userTypes";

export const newUserSchema = Joi.object<TUserDataCP>({
  name: Joi.string().trim().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.any().valid(Joi.ref("password")).required(),
});

export const loginSchema = Joi.object<TLoginUser>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
