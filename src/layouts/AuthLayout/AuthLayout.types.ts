import type {
    HTMLAttributes,
    ReactNode,
} from "react";

export interface AuthLayoutProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Optional brand logo.
     */
    logo?: ReactNode;

    /**
     * Optional footer.
     */
    footer?: ReactNode;

    /**
     * Optional left-side content.
     *
     * When provided, the layout switches
     * to a two-column split layout.
     */
    aside?: ReactNode;
}