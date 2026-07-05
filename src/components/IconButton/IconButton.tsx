import "./IconButton.css";

import { cn } from "../../utils/cn";

import { IconButtonProps } from "./IconButton.types";

export function IconButton({
    children,
    variant = "ghost",
    size = "md",
    loading = false,
    disabled,
    className,
    type = "button",
    title,
    "aria-label": ariaLabel,
    ...props
}: IconButtonProps) {

    const classes = cn(
        "fo-btn",
        "fo-icon-btn",
        `fo-btn--${variant}`,
        `fo-btn--${size}`,
        {
            "fo-btn--loading": loading,
        },
        className
    );

    return (
        <button
            type={type}
            className={classes}
            disabled={disabled || loading}
            aria-busy={loading}
            title={title ?? ariaLabel}
            {...props}
        >
            {loading ? (
                <span
                    className="fo-btn__spinner"
                    aria-hidden="true"
                />
            ) : (
                children
            )}
        </button>
    );
}