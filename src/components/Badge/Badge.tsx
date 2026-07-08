import "./Badge.css";

import { cn } from "../../utils/cn";

import { BadgeProps } from "./Badge.types";

export function Badge({
    children,
    variant = "default",
    size = "md",
    startIcon,
    endIcon,
    dot = false,
    fullWidth = false,
    className,
    ...props
}: BadgeProps) {

    const classes = cn(
        "fo-badge",
        `fo-badge--${variant}`,
        `fo-badge--${size}`,
        {
            "fo-badge--full": fullWidth,
            "fo-badge--dot": dot,
        },
        className
    );

    return (
        <span
            className={classes}
            {...props}
        >
            {dot && (
                <span
                    className="fo-badge__dot"
                    aria-hidden="true"
                />
            )}

            {startIcon && (
                <span
                    className="fo-badge__icon fo-badge__icon--start"
                    aria-hidden="true"
                >
                    {startIcon}
                </span>
            )}

            <span className="fo-badge__label">
                {children}
            </span>

            {endIcon && (
                <span
                    className="fo-badge__icon fo-badge__icon--end"
                    aria-hidden="true"
                >
                    {endIcon}
                </span>
            )}
        </span>
    );
}