import type {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * Props for the ChartContainer component.
 */
export interface ChartContainerProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Chart content.
     */
    children: ReactNode;

    /**
     * Height of the chart container.
     *
     * Accepts any valid CSS height value.
     *
     * Examples:
     * "20rem"
     * "320px"
     * "50vh"
     */
    height?: React.CSSProperties["height"];

}