import { Router } from "express";
import { createSpecie } from "../controllers/specieControllers";
import {
  authenticateSuperuser,
  authenticateUser,
} from "../middlewares/authenticateUserMiddleware";
import { cpUpload } from "../middlewares/uploadPicturesMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import specieSchema from "../schemas/specieSchema";

const specieRouter = Router();

specieRouter.post("/specie", cpUpload, createSpecie);
specieRouter.get("/specie/:id");
specieRouter.get("/species");
specieRouter.put(
  "/specie/:id",
  authenticateUser,
  authenticateSuperuser,
  validateSchemaMiddleware(specieSchema)
);
specieRouter.delete("/specie/:id", authenticateUser, authenticateSuperuser);

export default specieRouter;
