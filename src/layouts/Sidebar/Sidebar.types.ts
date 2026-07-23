import type {
    HTMLAttributes,
    ReactNode,
} from "react";

import type {
    LucideIcon,
} from "lucide-react";

/**
 * Represents a single sidebar navigation item.
 */
export interface SidebarNavigationItem {

    /**
     * Unique identifier.
     */
    id: string;

    /**
     * Display label.
     */
    label: string;

    /**
     * Navigation path.
     */
    href: string;

    /**
     * Navigation icon.
     */
    icon: LucideIcon;

    /**
     * Optional badge.
     *
     * Example:
     * "New"
     * "3"
     */
    badge?: ReactNode;

}

/**
 * Props for the Sidebar component.
 */
export interface SidebarProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Optional logo or branding.
     */
    brand?: ReactNode;

    /**
     * Optional footer content.
     */
    footer?: ReactNode;

}