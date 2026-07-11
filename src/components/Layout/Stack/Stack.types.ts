import {
    CSSProperties,
    HTMLAttributes,
    ReactNode,
} from "react";

export type StackSpacing =
    | "none"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl";

export type StackAlign =
    | "stretch"
    | "flex-start"
    | "center"
    | "flex-end"
    | "baseline";

export type StackJustify =
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";

export type StackDirection =
    | "row"
    | "column";

export interface StackProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Stack content.
     */
    children: ReactNode;

    /**
     * Gap between children.
     */
    spacing?: StackSpacing;

    /**
     * Cross-axis alignment.
     */
    align?: StackAlign;

    /**
     * Main-axis alignment.
     */
    justify?: StackJustify;

    /**
     * Allow wrapping.
     */
    wrap?: boolean;

    /**
     * Take full width.
     */
    fullWidth?: boolean;

    /**
     * Custom inline styles.
     */
    style?: CSSProperties;

    /**
     * Internal flex direction.
     * Prefer using Stack or HStack.
    */
    direction?: StackDirection;
}