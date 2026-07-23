import type {
    AnchorHTMLAttributes,
} from "react";

import type {
    SidebarNavigationItem,
} from "../Sidebar/Sidebar.types";

export interface SidebarItemProps
    extends AnchorHTMLAttributes<HTMLAnchorElement> {

    item: SidebarNavigationItem;

}