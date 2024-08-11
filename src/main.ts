import { fromZodError } from "zod-validation-error";

import { z } from "zod";
interface LoginForm {
  email: string;
  password: string;
}
const LoginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});



const formData: LoginForm = {
  email: "shoaib@gmail.com",
  password: "1sregeg2w5",
};
const validationResult: any = LoginFormSchema.safeParse(formData);

if (validationResult.success) {
  // Proceed with the valid data
  console.log("Login data is valid:", validationResult.data);
} else {
  // Handle validation errors from Zod
  console.error(fromZodError(validationResult.error));
}
