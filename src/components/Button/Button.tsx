import "./Button.css";

import { ButtonProps } from "./Button.types";
import { cn } from "../../utils/cn";

export function Button({
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    leftIcon,
    rightIcon,
    disabled,
    className,
    type = "button",
    ...props
}: ButtonProps) {
    const classes = cn(
        "fo-btn",
        `fo-btn--${variant}`,
        `fo-btn--${size}`,
        {
            "fo-btn--full": fullWidth,
            "fo-btn--loading": loading,
        },
        className
    );

    return (
        <button
            type={type}
            className={classes}
            disabled={disabled || loading}
            aria-disabled={disabled || loading}
            aria-busy={loading}
            {...props}
        >
            {loading ? (
                <span
                    className="fo-btn__spinner"
                    aria-hidden="true"
                />
            ) : (
                <>
                    {leftIcon && (
                        <span
                            className="fo-btn__icon"
                            aria-hidden="true"
                        >
                            {leftIcon}
                        </span>
                    )}

                    <span className="fo-btn__label">
                        {children}
                    </span>

                    {rightIcon && (
                        <span
                            className="fo-btn__icon"
                            aria-hidden="true"
                        >
                            {rightIcon}
                        </span>
                    )}
                </>
            )}
        </button>
    );
}