import {
    ReactNode,
    SelectHTMLAttributes,
} from "react";

export interface SelectOption {
    /**
     * Option label shown to the user.
     */
    label: string;

    /**
     * Option value.
     */
    value: string;

    /**
     * Disable this option.
     */
    disabled?: boolean;

    /**
     * Optional icon (future support).
     */
    icon?: ReactNode;
}

export interface SelectProps
    extends Omit<
        SelectHTMLAttributes<HTMLSelectElement>,
        "size"
    > {

    /**
     * Options.
     */
    options: SelectOption[];

    /**
     * Placeholder option.
     */
    placeholder?: string;

    /**
     * Field label.
     */
    label?: string;

    /**
     * Helper text.
     */
    helperText?: string;

    /**
     * Error message.
     */
    error?: string;

    /**
     * Full width.
     */
    fullWidth?: boolean;

    /**
     * Required field.
     */
    required?: boolean;

    /**
     * Size.
     */
    size?: "sm" | "md" | "lg";

    /**
     * Optional icon shown on the left.
     */
    leftIcon?: ReactNode;
}