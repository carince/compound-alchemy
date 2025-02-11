import { z } from 'zod';

export const authSchema = z.object({
    email: z.string().email().refine((email) => /^[a-zA-Z0-9._%+-]+@ija\.edu\.ph$/.test(email), {
        message: 'Email must be a valid ija.edu.ph email address',
    }),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});