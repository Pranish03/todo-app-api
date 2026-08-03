import { z } from "zod";
const todoWay = z.object({
  title: z.string().min(1, "title is required"),
  description: z.string().optional(),
  status: z
    .enum(["todo", "ongoing", "completed"], {
      message: "status must be of: todo,ongoing,completed",
    })
    .optional(),
  priority: z
    .enum(["low", "medium", "high"], {
      message: "priority must be of :low,meduim,high",
    })
    .optional(),
});
