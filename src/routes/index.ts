import { Router } from "express";
import registerRouter from "./registerRoutes";
import specieRouter from "./specieRoutes";
import userRouter from "./userRoutes";

const router = Router();

router.use(userRouter);
router.use(specieRouter);
router.use(registerRouter);

export default router;
