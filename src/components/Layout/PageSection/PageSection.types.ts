import type {
    HTMLAttributes,
    ReactNode,
} from "react";

export interface PageSectionProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Section title.
     */
    heading: ReactNode;

    /**
     * Optional section description.
     */
    description?: ReactNode;

    /**
     * Right aligned actions.
     */
    actions?: ReactNode;

    /**
     * Section content.
     */
    children: ReactNode;

}