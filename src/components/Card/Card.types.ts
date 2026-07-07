import {
    HTMLAttributes,
    ReactNode,
} from "react";

export type CardVariant =
    | "default"
    | "outlined"
    | "elevated"
    | "ghost";

export type CardPadding =
    | "none"
    | "sm"
    | "md"
    | "lg";

export interface CardProps
 extends HTMLAttributes<HTMLDivElement> {

    /**
     * Main heading displayed in the card header.
     */
    heading?: ReactNode;

    /**
     * Secondary heading displayed below the title.
     */
    description?: ReactNode;

    /**
     * Header actions.
     * Usually IconButtons or Buttons.
     */
    actions?: ReactNode;

    /**
     * Footer content.
     */
    footer?: ReactNode;

    /**
     * Card content.
     */
    children?: ReactNode;

    /**
     * Visual appearance.
     */
    variant?: CardVariant;

    /**
     * Internal spacing.
     */
    padding?: CardPadding;

    /**
     * Makes the card occupy the full width.
     */
    fullWidth?: boolean;
}