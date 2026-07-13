import "./Checkbox.css";

import {
    forwardRef,
    useId,
} from "react";

import { Check } from "lucide-react";

import type { CheckboxProps } from "./Checkbox.types";
import { cn } from "../../utils/cn";

export const Checkbox = forwardRef<
    HTMLInputElement,
    CheckboxProps
>(
    (
        {
            id,
            label,
            helperText,
            error,
            className,
            disabled,
            required,
            ...props
        },
        ref
    ) => {

        const generatedId = useId();

        const inputId = id ?? generatedId;

        const helperTextId = helperText
            ? `${inputId}-helper`
            : undefined;

        const errorId = error
            ? `${inputId}-error`
            : undefined;

        const describedBy = [
            helperTextId,
            errorId,
        ]
            .filter(Boolean)
            .join(" ") || undefined;

        return (
            <div
                className={cn(
                    "fo-checkbox",
                    {
                        "fo-checkbox--disabled": disabled,
                        "fo-checkbox--error": !!error,
                    },
                    className
                )}
            >
                <label
                    htmlFor={inputId}
                    className="fo-checkbox__label"
                >
                    <input
                        ref={ref}
                        id={inputId}
                        type="checkbox"
                        disabled={disabled}
                        required={required}
                        aria-invalid={!!error}
                        aria-describedby={describedBy}
                        className="fo-checkbox__input"
                        {...props}
                    />

                    <span
                        className="fo-checkbox__indicator"
                        aria-hidden="true"
                    >
                        <Check strokeWidth={3} className="fo-checkbox__icon" />
                    </span>

                    {label && (
                        <span className="fo-checkbox__text">
                            {label}
                        </span>
                    )}
                </label>

                {helperText && (
                    <p
                        id={helperTextId}
                        className="fo-checkbox__helper-text"
                    >
                        {helperText}
                    </p>
                )}

                {error && (
                    <p
                        id={errorId}
                        className="fo-checkbox__error"
                        role="alert"
                    >
                        {error}
                    </p>
                )}
            </div>
        );

    }
);

Checkbox.displayName = "Checkbox";