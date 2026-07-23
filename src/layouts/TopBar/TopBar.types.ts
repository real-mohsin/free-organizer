import type {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * Props for the TopBar component.
 */
export interface TopBarProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Optional heading.
     *
     * Reserved for future use.
     */
    heading?: ReactNode;

    /**
     * Optional actions displayed on the right.
     *
     * Reserved for future use.
     */
    actions?: ReactNode;

}