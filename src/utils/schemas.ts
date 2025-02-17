import z from "zod"

export const RegisterForm = z.object({
    email: z.string().email().refine((email) => email.endsWith("@ija.edu.ph"), {
        message: "Email must be a valid ija.edu.ph address",
    }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});