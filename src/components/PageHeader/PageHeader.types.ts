import {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * Props for the PageHeader component.
 */
export interface PageHeaderProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Main page heading.
     */
    heading: ReactNode;

    /**
     * Optional supporting text.
     */
    subtitle?: ReactNode;

    /**
     * Optional actions displayed on the right.
     */
    actions?: ReactNode;

}