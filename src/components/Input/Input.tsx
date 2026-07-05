import "./Input.css";

import {
    forwardRef,
    useId,
} from "react";

import { cn } from "../../utils/cn";

import { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            label,
            helperText,
            error,
            size = "md",
            fullWidth = false,
            required = false,
            leftIcon,
            rightIcon,
            className,
            inputClassName,
            labelClassName,
            helperClassName,
            disabled,
            ...props
        },
        ref
    ) => {
        const generatedId = useId();

        const inputId = id ?? generatedId;

        const helperId = `${inputId}-helper`;

        const errorId = `${inputId}-error`;

        const describedBy = error
            ? errorId
            : helperText
                ? helperId
                : undefined;

        const rootClasses = cn(
            "fo-input",
            `fo-input--${size}`,
            {
                "fo-input--full": fullWidth,
                "fo-input--disabled": disabled,
                "fo-input--error": !!error,
            },
            className
        );

        const wrapperClasses = cn(
            "fo-input__wrapper",
            {
                "fo-input__wrapper--left-icon": !!leftIcon,
                "fo-input__wrapper--right-icon": !!rightIcon,
            }
        );

        const fieldClasses = cn(
            "fo-input__field",
            inputClassName
        );

        return (
            <div className={rootClasses}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className={cn(
                            "fo-input__label",
                            labelClassName
                        )}
                    >
                        {label}

                        {required && (
                            <span
                                className="fo-input__required"
                                aria-hidden="true"
                            >
                                *
                            </span>
                        )}
                    </label>
                )}

                <div className={wrapperClasses}>
                    {leftIcon && (
                        <span
                            className="fo-input__icon fo-input__icon--left"
                            aria-hidden="true"
                        >
                            {leftIcon}
                        </span>
                    )}

                    <input
                        ref={ref}
                        id={inputId}
                        className={fieldClasses}
                        disabled={disabled}
                        required={required}
                        aria-invalid={!!error}
                        aria-describedby={describedBy}
                        {...props}
                    />

                    {rightIcon && (
                        <span
                            className="fo-input__icon fo-input__icon--right"
                            aria-hidden="true"
                        >
                            {rightIcon}
                        </span>
                    )}
                </div>

                {error ? (
                    <p
                        id={errorId}
                        className={cn(
                            "fo-input__error",
                            helperClassName
                        )}
                    >
                        {error}
                    </p>
                ) : (
                    helperText && (
                        <p
                            id={helperId}
                            className={cn(
                                "fo-input__helper",
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
);

Input.displayName = "Input";