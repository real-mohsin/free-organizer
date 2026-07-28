import type { ZodSchema } from "zod";

export function validateForm<T extends object>(
    schema: ZodSchema<T>,
    values: T,
) {

    const result = schema.safeParse(values);

    if (result.success) {

        return {

            success: true,

            errors: {},

            data: result.data,

        };

    }

    const fieldErrors =
        result.error.flatten().fieldErrors;

    const errors: Record<string, string> = {};

    for (const key in fieldErrors) {

        const value = fieldErrors[key];

        errors[key] = value?.[0] ?? "";

    }

    return {

        success: false,

        errors,

        data: null,

    };

}