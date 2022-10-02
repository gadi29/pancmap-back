import { Router } from "express";
import specieRouter from "./specieRoutes";
import userRouter from "./userRoutes";

const router = Router();

router.use(userRouter);
router.use(specieRouter);

export default router;
