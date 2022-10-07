import { Router } from "express";
import { authenticateUser } from "../middlewares/authenticateUserMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";

const registerRouter = Router();

export default registerRouter;
