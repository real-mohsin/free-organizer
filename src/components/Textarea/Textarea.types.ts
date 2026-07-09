import {
    ReactNode,
    TextareaHTMLAttributes,
} from "react";

export interface TextareaProps
    extends Omit<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        "size"
    > {

    /**
     * Label displayed above the textarea.
     */
    label?: string;

    /**
     * Helper text displayed below.
     */
    helperText?: string;

    /**
     * Error message.
     */
    error?: string;

    /**
     * Makes the textarea take full width.
     */
    fullWidth?: boolean;

    /**
     * Required field.
     */
    required?: boolean;

    /**
     * Textarea size.
     */
    size?: "sm" | "md" | "lg";

    /**
     * Optional icon shown before the textarea.
     * (Reserved for future use)
     */
    leftIcon?: ReactNode;

    /**
     * Show character count.
     */
    showCount?: boolean;

    /**
     * Maximum number of characters.
     */
    maxLength?: number;

    /**
     * Allow resizing.
     */
    resize?: "none" | "both" | "horizontal" | "vertical";
}