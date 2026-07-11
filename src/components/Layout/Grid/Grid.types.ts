import {
    CSSProperties,
    HTMLAttributes,
    ReactNode,
} from "react";

export type GridSpacing =
    | "none"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl";

export type GridAlign =
    | "stretch"
    | "start"
    | "center"
    | "end";

export interface GridProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Grid content.
     */
    children: ReactNode;

    /**
     * Number of columns.
     */
    columns?: number;

    /**
     * Responsive minimum item width.
     */
    minItemWidth?: string;

    /**
     * Gap between items.
     */
    spacing?: GridSpacing;

    /**
     * Stretch grid to full width.
     */
    fullWidth?: boolean;

    /**
     * Align grid items.
     */
    alignItems?: GridAlign;

    /**
     * Justify grid items.
     */
    justifyItems?: GridAlign;

    /**
     * Additional inline styles.
     */
    style?: CSSProperties;
}