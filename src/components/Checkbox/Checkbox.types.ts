import type {
    InputHTMLAttributes,
    ReactNode,
} from "react";

export interface CheckboxProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "type"
    > {

    /**
     * Checkbox label.
     */
    label?: ReactNode;

    /**
     * Helper text displayed below the checkbox.
     */
    helperText?: ReactNode;

    /**
     * Error message.
     */
    error?: ReactNode;

}