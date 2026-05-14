import { z } from "zod";

/* =========================
   SIGNUP SCHEMA (UPDATED)
========================= */

const courseEnum = z.enum([
  "C",
  "C++",
  "MERN Stack",
  "Python",
  "Data Science",
]);

export const signupSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters long"),

    email: z.string().email("Invalid email format"),

    city: z.string().min(2, "City is required"),

    phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),

    role: z.enum(["student", "client"], {
      required_error: "Please select a role",
    }),

    courses: z.array(courseEnum).optional(),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .regex(/[A-Z]/, "Must include at least one uppercase letter")
      .regex(/[0-9]/, "Must include at least one number"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine(
    (data) => {
      if (data.role === "student") {
        return data.courses && data.courses.length > 0;
      }
      return true;
    },
    {
      message: "Select at least one course",
      path: ["courses"],
    }
  );
// Login Schema
export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email format"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters long"),
});