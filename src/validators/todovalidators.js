import { z } from "zod";

export const createTodoValidator = z.object({
  title: z.string().min(1, "title is required"),
  description: z.string().optional(),
  status: z
    .enum(["todo", "ongoing", "completed"], {
      message: "status must be of: todo, ongoing or completed",
    })
    .optional(),
  priority: z
    .enum(["low", "medium", "high"], {
      message: "priority must be of :low, meduim or high",
    })
    .optional(),
});
