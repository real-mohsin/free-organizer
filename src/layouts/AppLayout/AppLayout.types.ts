import type {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * Props for the AppLayout component.
 */
export interface AppLayoutProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Optional top navigation.
     */
    header?: ReactNode;

}