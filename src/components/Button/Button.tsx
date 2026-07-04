import "./Button.css";

import { ButtonProps } from "./Button.types";

export function Button({
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    leftIcon,
    rightIcon,
    disabled,
    className = "",
    ...props
}: ButtonProps) {

    const classes = [
        "fo-btn",
        `fo-btn--${variant}`,
        `fo-btn--${size}`,
        fullWidth && "fo-btn--full",
        loading && "fo-btn--loading",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button
            className={classes}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <span className="fo-btn__spinner" />
            ) : (
                <>
                    {leftIcon && (
                        <span className="fo-btn__icon">
                            {leftIcon}
                        </span>
                    )}

                    <span className="fo-btn__label">
                        {children}
                    </span>

                    {rightIcon && (
                        <span className="fo-btn__icon">
                            {rightIcon}
                        </span>
                    )}
                </>
            )}
        </button>
    );
}