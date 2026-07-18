import {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * Props for the StatCard component.
 */
export interface StatCardProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Metric heading.
     */
    heading: ReactNode;

    /**
     * Main value.
     */
    value: ReactNode;

    /**
     * Optional supporting information.
     */
    footer?: ReactNode;

    /**
     * Optional icon displayed next to the heading.
     */
    icon?: ReactNode;

    actions?: ReactNode;

}