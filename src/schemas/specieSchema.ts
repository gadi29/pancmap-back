import Joi from "joi";
import { TSpecieData } from "../types/specieType";

const specieSchema = Joi.object<TSpecieData>({
  cientificName: Joi.string().trim().required(),
  generalCharacteristics: Joi.string().trim().required(),
  curiosities: Joi.string().trim(),
  leafMorfology: Joi.string().trim().required(),
  flowerMorfology: Joi.string().trim().required(),
  fruitMorfology: Joi.string().trim().required(),
  undergroundMorfology: Joi.string().trim().required(),
  leafPicturePath: Joi.string().trim().required(),
  flowerPicturePath: Joi.string().trim().required(),
  fruitPicturePath: Joi.string().trim().required(),
  undergroundPicturePath: Joi.string().trim(),
  edibleParts: Joi.string().trim().required(),
});

export default specieSchema;
