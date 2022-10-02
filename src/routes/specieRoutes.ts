import { Router } from "express";

const specieRouter = Router();

specieRouter.post("/specie");
specieRouter.get("/specie/:id");
specieRouter.get("/species");
specieRouter.put("/specie");
specieRouter.delete("/specie/:id");

export default specieRouter;
