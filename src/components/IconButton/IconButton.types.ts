import {
    ButtonHTMLAttributes,
    ReactNode,
} from "react";

import {
    ButtonVariant,
    ButtonSize,
} from "../Button/Button.types";

export interface IconButtonProps
    extends Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "children"
    > {

    children: ReactNode;

    /**
     * Required for accessibility.
     * Screen readers use this instead of visible text.
     */
    "aria-label": string;

    variant?: ButtonVariant;

    size?: ButtonSize;

    loading?: boolean;
}