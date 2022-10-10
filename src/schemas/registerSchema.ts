import Joi from "joi";
import { TRegisterData } from "../types/registerType";

const registerSchema = Joi.object<TRegisterData>({
  title: Joi.string().required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
  specieId: Joi.number().required(),
  observations: Joi.string(),
});

export default registerSchema;
