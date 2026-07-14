import { z } from "zod";

/**
 * Login form validation schema.
 */
export const loginSchema = z.object({

    email: z
        .email("Please enter a valid email address.")
        .trim(),

    password: z
        .string()
        .min(
            1,
            "Password is required."
        ),

    rememberMe: z.boolean(),

});

/**
 * Login form values.
 */
export type LoginFormData = z.infer<
    typeof loginSchema
>;