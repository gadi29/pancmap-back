import { Router } from "express";
import { signUp } from "../controllers/userControllers";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { loginSchema, newUserSchema } from "../schemas/userSchemas";

const userRouter = Router();

userRouter.post("/signup", validateSchemaMiddleware(newUserSchema), signUp);
userRouter.post("/signin", validateSchemaMiddleware(loginSchema));

export default userRouter;
