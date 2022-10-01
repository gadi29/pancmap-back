import { Router } from "express";
import { signUp } from "../controllers/userControllers";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { newUserSchema } from "../schemas/userSchemas";

const userRouter = Router();

userRouter.post("/signup", validateSchemaMiddleware(newUserSchema), signUp);
userRouter.post("/signin");

export default userRouter;
