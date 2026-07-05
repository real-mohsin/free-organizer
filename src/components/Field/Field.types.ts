import {
    HTMLAttributes,
    ReactNode,
} from "react";

export interface FieldProps
    extends HTMLAttributes<HTMLDivElement> {

    label?: string;

    helperText?: string;

    error?: string;

    required?: boolean;

    inputId?: string;

    children: ReactNode;

    labelClassName?: string;

    helperClassName?: string;
}