import Joi from "joi";
import { TRegisterData } from "../types/registerType";

const registerSchema = Joi.object<TRegisterData>({
  title: Joi.string().required(),
  coordinates: Joi.string().required(),
  userId: Joi.number().required(),
  specieId: Joi.number().required(),
  picturePath: Joi.string(), //tirar
  observations: Joi.string(),
});

export default registerSchema;
