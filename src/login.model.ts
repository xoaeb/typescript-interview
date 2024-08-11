// login.model.ts
export interface LoginForm {
    email: string;
    password: string;
  }
  


import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});