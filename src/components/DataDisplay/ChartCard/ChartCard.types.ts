import {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * Props for the ChartCard component.
 */
export interface ChartCardProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Card heading.
     */
    heading: ReactNode;

    /**
     * Optional supporting text.
     */
    subtitle?: ReactNode;

    /**
     * Optional actions displayed in the header.
     */
    actions?: ReactNode;

    /**
     * Chart or any custom content.
     */
    children: ReactNode;

}