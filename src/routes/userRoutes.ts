import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { newUserSchema } from "../schemas/userSchemas";

const userRouter = Router();

userRouter.post("/signup", validateSchemaMiddleware(newUserSchema));
userRouter.post("/signin");

export default userRouter;
