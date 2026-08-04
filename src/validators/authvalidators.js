import { z } from "zod";

const registerValidator = z.object({
  full_name: z
    .string()
    .trim()
    .min(3, "name should be at least 3 characters")
    .max(15),
  email: z.email("invalid email address").trim(),
  password: z.string.trim().min(8, "Password should be of 8 characters"),
});

const loginValidator = z.object({
  email: z.email("invalid email address").trim(),
  password: z.string.trim().min(8, "Password should be of 8 characters"),
});
