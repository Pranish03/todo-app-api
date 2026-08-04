import { Router } from "express";
import { login, logout, me, register } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import { validateBody } from "../middleware/validateBody.js";
import {
  loginValidator,
  registerValidator,
} from "../validators/authvalidators.js";

const router = Router();

router.post("/register", validateBody(registerValidator), register);
router.post("/login", validateBody(loginValidator), login);
router.post("/logout", logout);
router.get("/me", protect, me);

export default router;
