import { fromZodError } from "zod-validation-error";

import { LoginForm, LoginFormSchema } from "./login.model";

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
