import type {
    ZodSchema,
} from "zod";

export interface ValidationSuccess<T> {

    success: true;

    data: T;

    errors: {};

}

export interface ValidationFailure {

    success: false;

    data: null;

    errors: Record<string, string>;

}

export type ValidationResult<T> =
    | ValidationSuccess<T>
    | ValidationFailure;

export function validateForm<T extends object>(
    schema: ZodSchema<T>,
    values: T,
): ValidationResult<T> {

    const result = schema.safeParse(values);

    if (result.success) {

        return {

            success: true,

            data: result.data,

            errors: {},

        };

    }

    const fieldErrors =
        result.error.flatten().fieldErrors;

    const errors: Record<string, string> = {};

    for (const key in fieldErrors) {

        errors[key] =
            fieldErrors[key]?.[0] ?? "";

    }

    return {

        success: false,

        data: null,

        errors,

    };

}