import Joi from "joi";
import { TSpecieData } from "../types/specieType";

const specieSchema = Joi.object<TSpecieData>({
  cientificName: Joi.string().trim().required(),
  generalCharacteristics: Joi.string().trim().required(),
  curiosities: Joi.string(),
  leafMorfology: Joi.string().trim().required(),
  flowerMorfology: Joi.string().trim().required(),
  fruitMorfology: Joi.string().optional().allow(""),
  undergroundMorfology: Joi.string().optional().allow(""),
  edibleParts: Joi.string().trim().required(),
  leafPicturePath: Joi.string().uri().required(),
  flowerPicturePath: Joi.string().uri().required(),
  fruitPicturePath: Joi.string().uri().optional().allow(""),
  undergroundPicturePath: Joi.string().uri().optional().allow(""),
});

export default specieSchema;
