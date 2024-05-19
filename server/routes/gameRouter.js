import Router from "express";
const router = Router();
import gameController from "../controllers/gameController.js";
import checkRole from "../middleware/checkRoleMiddleware.js";

router.get("/count", gameController.getCount);
router.post("/", checkRole("ADMIN"), gameController.create);
router.get("/", gameController.getAll);
router.get("/:id", gameController.getOne);

export default router;
