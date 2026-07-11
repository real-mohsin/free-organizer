import {
    HTMLAttributes,
    ReactNode,
} from "react";

export type DividerOrientation =
    | "horizontal"
    | "vertical";

export type DividerVariant =
    | "solid"
    | "dashed"
    | "dotted";

export type DividerSpacing =
    | "none"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl";

export type DividerLabelAlign =
    | "left"
    | "center"
    | "right";

export interface DividerProps
    extends HTMLAttributes<HTMLHRElement> {

    /**
     * Divider orientation.
     */
    orientation?: DividerOrientation;

    /**
     * Divider style.
     */
    variant?: DividerVariant;

    /**
     * Vertical spacing.
     */
    spacing?: DividerSpacing;

    /**
     * Optional label.
     */
    children?: ReactNode;

    /**
     * Label alignment.
     */
    labelAlign?: DividerLabelAlign;
}