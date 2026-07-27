import type {
    HTMLAttributes,
    ReactNode,
} from "react";

export interface EmptyStateProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Optional visual or icon.
     */
    visual?: ReactNode;

    /**
     * Empty state title.
     */
    heading: ReactNode;

    /**
     * Supporting description.
     */
    description?: ReactNode;

    /**
     * Optional actions.
     */
    actions?: ReactNode;

}