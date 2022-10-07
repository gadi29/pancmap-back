import Joi from "joi";
import { TSpecieData } from "../types/specieType";

const specieSchema = Joi.object<TSpecieData>({
  cientificName: Joi.string().trim().required(),
  generalCharacteristics: Joi.string().trim().required(),
  curiosities: Joi.string(),
  leafMorfology: Joi.string().trim().required(),
  flowerMorfology: Joi.string().trim().required(),
  fruitMorfology: Joi.string().trim().required(),
  undergroundMorfology: Joi.string().trim().required(),
  edibleParts: Joi.string().trim().required(),
});

export default specieSchema;
