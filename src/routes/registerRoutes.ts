import { Router } from "express";
import {
  createRegister,
  deleteRegister,
  getSpecieRegisters,
  updateRegister,
} from "../controllers/registerControllers";
import { authenticateUser } from "../middlewares/authenticateUserMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import registerSchema from "../schemas/registerSchema";

const registerRouter = Router();

registerRouter.post(
  "/register",
  authenticateUser,
  validateSchemaMiddleware(registerSchema),
  createRegister
);
registerRouter.get("/registers/:id", getSpecieRegisters);
registerRouter.put(
  "/register/:id",
  authenticateUser,
  validateSchemaMiddleware(registerSchema),
  updateRegister
);
registerRouter.delete("/register/:id", authenticateUser, deleteRegister);

export default registerRouter;
