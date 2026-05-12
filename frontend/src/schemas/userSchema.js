import { z } from "zod";

// Signup Schema
export const signupSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name must not exceed 50 characters"),

  email: z
    .string()
    .email("Invalid email format"),

  password:(
  z.string()
   .min(6, "Password must be at least 6 characters long")
   .regex(/[A-Z]/, "Must include at least one uppercase letter")
   .regex(/[0-9]/, "Must include at least one number")
),

  confirmPassword: z
    .string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], // error will show under confirmPassword
});


// Login Schema
export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email format"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters long"),
});