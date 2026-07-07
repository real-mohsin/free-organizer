import "./Field.css";

import { cn } from "../../utils/cn";

import { FieldProps } from "./Field.types";

export function Field({
    label,
    helperText,
    error,
    required = false,
    inputId,
    children,
    className,
    labelClassName,
    helperClassName,
    ...props
}: FieldProps) {
    return (
        <div
            className={cn("fo-field", className)}
            {...props}
        >
            {label && (
                <label
                    htmlFor={inputId}
                    className={cn(
                        "fo-field__label",
                        labelClassName
                    )}
                >
                    <span>{label}</span>

                    {required && (
                        <span
                            className="fo-field__required"
                            aria-hidden="true"
                        >
                            *
                        </span>
                    )}
                </label>
            )}

            <div className="fo-field__control">
                {children}
            </div>

            {error ? (
                <p
                    className={cn(
                        "fo-field__error",
                        helperClassName
                    )}
                    role="alert"
                >
                    {error}
                </p>
            ) : (
                helperText && (
                    <p
                        className={cn(
                            "fo-field__helper",
                            helperClassName
                        )}
                    >
                        {helperText}
                    </p>
                )
            )}
        </div>
    );
}