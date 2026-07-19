import type {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * Props for the PageHero component.
 */
export interface PageHeroProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Hero content.
     *
     * Typically contains a PageHeader
     * and optional additional content.
     */
    children: ReactNode;

}