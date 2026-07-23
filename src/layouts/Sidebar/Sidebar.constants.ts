import {
    BarChart3,
    CreditCard,
    FolderKanban,
    LayoutDashboard,
    Users,
} from "lucide-react";

import type {
    SidebarNavigationItem,
} from "./Sidebar.types";

/**
 * Sidebar navigation items.
 */
export const SIDEBAR_NAVIGATION: SidebarNavigationItem[] = [

    {
        id: "dashboard",
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
        active: true,
    },

    {
        id: "clients",
        label: "Clients",
        href: "/clients",
        icon: Users,
    },

    {
        id: "projects",
        label: "Projects",
        href: "/projects",
        icon: FolderKanban,
    },

    {
        id: "payments",
        label: "Payments",
        href: "/payments",
        icon: CreditCard,
    },

    {
        id: "reports",
        label: "Reports",
        href: "/reports",
        icon: BarChart3,
    },

];