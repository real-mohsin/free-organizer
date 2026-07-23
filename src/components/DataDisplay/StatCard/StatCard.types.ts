import {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * Available StatCard variants.
 */
export type StatCardVariant =
    | "default"
    | "revenue"
    | "clients"
    | "projects"
    | "outstanding";

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

    /**
     * Optional actions.
     */
    actions?: ReactNode;

    /**
     * Visual variant.
     *
     * @default "default"
     */
    variant?: StatCardVariant;

}