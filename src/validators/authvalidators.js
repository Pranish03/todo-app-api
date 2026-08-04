import { z } from "zod";

export const registerValidator = z.object({
  full_name: z
    .string()
    .trim()
    .min(3, "name should be at least 3 characters")
    .max(15),
  email: z.email("invalid email address").trim(),
  password: z.string().trim().min(8, "Password should be of 8 characters"),
});

export const loginValidator = z.object({
  email: z.email("invalid email address").trim(),
  password: z.string().trim().min(8, "Password should be of 8 characters"),
});

export const changePasswordSchema = z.object({
  oldPassword: z.string().trim().min(8, "Old password should be of 8 characters"),
  newPassword: z.string().trim().min(8, "New password should be of 8 characters"),
  confirmPassword: z.string().trim().min(8, "Confirm password should be of 8 characters"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "New password and confirm password must match",
  path: ["confirmPassword"],
}).refine((data) => data.oldPassword !== data.newPassword, {
  message: "New password must be different from old password",
  path: ["newPassword"],
});