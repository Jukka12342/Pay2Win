import Router from 'express'
const router = Router()
import goodTypeRouter from "./goodTypeRouter.js";
import userRouter from "./userRouter.js";
import goodRouter from "./goodRouter.js";
import gameRouter from "./gameRouter.js";

router.use('/user', userRouter)
router.use('/goodType', goodTypeRouter)
router.use('/good', goodRouter)
router.use('/game', gameRouter)

export default router;