import Joi from "joi";
import { TRegisterData } from "../types/registerType";

const registerSchema = Joi.object<TRegisterData>({
  title: Joi.string().required(),
  longitude: Joi.string().required(),
  latitude: Joi.string().required(),
  specieId: Joi.number().required(),
  observations: Joi.string(),
});

export default registerSchema;
