import Joi from "joi";

export const newUserSchema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  superuser: Joi.boolean().required(),
});
