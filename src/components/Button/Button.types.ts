import { ButtonHTMLAttributes, ReactNode } from "react";
import { ComponentSize } from "../../types/component.types";

export type ButtonVariant =
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "success";

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {

    variant?: ButtonVariant;

    size?: ComponentSize;

    fullWidth?: boolean;

    loading?: boolean;

    leftIcon?: ReactNode;

    rightIcon?: ReactNode;

    children: ReactNode;
}