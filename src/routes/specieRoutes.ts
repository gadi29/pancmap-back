import { Router } from "express";
import {
  createSpecie,
  deleteSpecie,
  getAllSpecies,
  getSpecie,
  updateSpecie,
} from "../controllers/specieControllers";
import {
  authenticateSuperuser,
  authenticateUser,
} from "../middlewares/authenticateUserMiddleware";
import { cpUpload } from "../middlewares/uploadPicturesMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import specieSchema from "../schemas/specieSchema";

const specieRouter = Router();

specieRouter.post("/specie", cpUpload, createSpecie);
specieRouter.get("/specie/:id", getSpecie);
specieRouter.get("/species", getAllSpecies);
specieRouter.put(
  "/specie/:id",
  authenticateUser,
  authenticateSuperuser,
  validateSchemaMiddleware(specieSchema),
  updateSpecie
);
specieRouter.delete(
  "/specie/:id",
  authenticateUser,
  authenticateSuperuser,
  deleteSpecie
);

export default specieRouter;
