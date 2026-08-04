import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getAllTodo,
  getTodo,
} from "../controllers/todoController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/", protect, createTodo);
router.get("/:id", protect, getTodo);
router.get("/", protect, getAllTodo);
router.put("/:id", protect, editTodo);
router.delete("/:id", protect, deleteTodo);

export default router;
