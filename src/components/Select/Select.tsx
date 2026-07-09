import "./Select.css";

import {
    forwardRef,
    useId,
} from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "../../utils/cn";

import { SelectProps } from "./Select.types";

export const Select = forwardRef<
    HTMLSelectElement,
    SelectProps
>(
    (
        {
            options,
            placeholder,

            label,
            helperText,
            error,

            fullWidth = false,
            required = false,

            size = "md",

            leftIcon,

            className,

            disabled,

            id,

            ...props
        },
        ref
    ) => {
        const generatedId = useId();

        const inputId = id ?? generatedId;

        const wrapperClasses = cn(
            "fo-select-wrapper",
            {
                "fo-select-wrapper--full": fullWidth,
            }
        );

        const rootClasses = cn(
            "fo-select",
            `fo-select--${size}`,
            {
                "fo-select--full": fullWidth,
                "fo-select--disabled": !!disabled,
                "fo-select--error": !!error,
                "fo-select--with-icon": !!leftIcon,
            },
            className
        );

        return (
            <div className={wrapperClasses}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className="fo-select__label"
                    >
                        {label}

                        {required && (
                            <span
                                className="fo-select__required"
                                aria-hidden="true"
                            >
                                *
                            </span>
                        )}
                    </label>
                )}

                <div className={rootClasses}>
                    {leftIcon && (
                        <span
                            className="fo-select__icon"
                            aria-hidden="true"
                        >
                            {leftIcon}
                        </span>
                    )}

                    <select
                        ref={ref}
                        id={inputId}
                        className="fo-select__control"
                        disabled={disabled}
                        required={required}
                        aria-invalid={!!error}
                        {...props}
                    >
                        {placeholder && (
                            <option value="">
                                {placeholder}
                            </option>
                        )}

                        {options.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                                disabled={option.disabled}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <span
                        className="fo-select__arrow"
                        aria-hidden="true"
                    >
                        <ChevronDown size={18} />
                    </span>
                </div>

                {error ? (
                    <p
                        className="fo-select__error"
                        role="alert"
                    >
                        {error}
                    </p>
                ) : (
                    helperText && (
                        <p className="fo-select__helper">
                            {helperText}
                        </p>
                    )
                )}
            </div>
        );
    }
);

Select.displayName = "Select";