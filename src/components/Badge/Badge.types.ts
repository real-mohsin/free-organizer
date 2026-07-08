import {
    HTMLAttributes,
    ReactNode,
} from "react";

export type BadgeVariant =
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "info";

export type BadgeSize =
    | "sm"
    | "md"
    | "lg";

export interface BadgeProps
    extends HTMLAttributes<HTMLSpanElement> {

    /**
     * Badge content.
     */
    children: ReactNode;

    /**
     * Badge color variant.
     */
    variant?: BadgeVariant;

    /**
     * Badge size.
     */
    size?: BadgeSize;

    /**
     * Leading icon.
     */
    startIcon?: ReactNode;

    /**
     * Trailing icon.
     */
    endIcon?: ReactNode;

    /**
     * Show status dot.
     */
    dot?: boolean;

    /**
     * Makes the badge span the available width.
     */
    fullWidth?: boolean;
}