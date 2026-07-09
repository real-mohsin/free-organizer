import "./Textarea.css";

import {
    forwardRef,
    useId,
} from "react";

import { cn } from "../../utils/cn";

import { TextareaProps } from "./Textarea.types";

export const Textarea = forwardRef<
    HTMLTextAreaElement,
    TextareaProps
>(
    (
        {
            label,
            helperText,
            error,

            fullWidth = false,
            required = false,

            size = "md",

            className,

            disabled,

            id,

            showCount = false,

            maxLength,

            resize = "vertical",

            value,

            defaultValue,

            ...props
        },
        ref
    ) => {
        const generatedId = useId();

        const inputId = id ?? generatedId;

        const currentLength =
            typeof value === "string"
                ? value.length
                : typeof defaultValue === "string"
                    ? defaultValue.length
                    : 0;

        const wrapperClasses = cn(
            "fo-textarea-wrapper",
            {
                "fo-textarea-wrapper--full": fullWidth,
            }
        );

        const rootClasses = cn(
            "fo-textarea",
            `fo-textarea--${size}`,
            `fo-textarea--resize-${resize}`,
            {
                "fo-textarea--full": fullWidth,
                "fo-textarea--disabled": !!disabled,
                "fo-textarea--error": !!error,
            },
            className
        );

        return (
            <div className={wrapperClasses}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className="fo-textarea__label"
                    >
                        {label}

                        {required && (
                            <span
                                className="fo-textarea__required"
                                aria-hidden="true"
                            >
                                *
                            </span>
                        )}
                    </label>
                )}

                <textarea
                    ref={ref}
                    id={inputId}
                    className={rootClasses}
                    disabled={disabled}
                    required={required}
                    aria-invalid={!!error}
                    maxLength={maxLength}
                    value={value}
                    defaultValue={defaultValue}
                    {...props}
                />

                <div className="fo-textarea__footer">
                    <div>
                        {error ? (
                            <p
                                className="fo-textarea__error"
                                role="alert"
                            >
                                {error}
                            </p>
                        ) : (
                            helperText && (
                                <p className="fo-textarea__helper">
                                    {helperText}
                                </p>
                            )
                        )}
                    </div>

                    {showCount && maxLength && (
                        <span className="fo-textarea__count">
                            {currentLength} / {maxLength}
                        </span>
                    )}
                </div>
            </div>
        );
    }
);

Textarea.displayName = "Textarea";