import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getAllTodo,
  getTodo,
} from "../controllers/todoController.js";

const router = Router();

router.post("/", createTodo);
router.get("/:id", getTodo);
router.get("/", getAllTodo);
router.put("/:id", editTodo);
router.delete("/:id", deleteTodo);

export default router;
