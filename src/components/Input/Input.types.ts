import {
    InputHTMLAttributes,
    ReactNode,
} from "react";
import { ComponentSize } from "../../types/component.types";

export interface InputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "size"
    > {

    /**
     * Label displayed above the input.
     */
    label?: string;

    /**
     * Helper text displayed below the input.
     */
    helperText?: string;

    /**
     * Error message displayed below the input.
     * When provided, the input will automatically
     * receive aria-invalid="true".
     */
    error?: string;

    /**
     * Input size.
     */
    size?: ComponentSize;

    /**
     * Makes the input take the full width
     * of its parent container.
     */
    fullWidth?: boolean;

    /**
     * Shows a required indicator (*) next to the label.
     */
    required?: boolean;

    /**
     * Icon displayed before the input.
     */
    leftIcon?: ReactNode;

    /**
     * Icon displayed after the input.
     */
    rightIcon?: ReactNode;

    /**
     * Additional class name for the root element.
     */
    className?: string;

    /**
     * Additional class name for the input element.
     */
    inputClassName?: string;

    /**
     * Additional class name for the label.
     */
    labelClassName?: string;

    /**
     * Additional class name for the helper/error text.
     */
    helperClassName?: string;
}