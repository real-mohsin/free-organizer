import type {
    ButtonHTMLAttributes,
} from "react";

import type {
    SidebarNavigationItem,
} from "../Sidebar/Sidebar.types";

export interface SidebarItemProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {

    /**
     * Sidebar navigation item.
     */
    item: SidebarNavigationItem;

}