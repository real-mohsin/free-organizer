import type {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * Props for the TableCard component.
 */
export interface TableCardProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Card heading.
     */
    heading: ReactNode;

    /**
     * Optional subtitle.
     */
    subtitle?: ReactNode;

    /**
     * Optional actions displayed
     * in the top-right corner.
     */
    actions?: ReactNode;

    /**
     * Table content.
     */
    children: ReactNode;

}