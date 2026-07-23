import "./SidebarItem.css";

import { cn } from "../../utils/cn";

import type {
    SidebarItemProps,
} from "./SidebarItem.types";

export function SidebarItem({
    item,
    className,
    ...props
}: SidebarItemProps) {

    const Icon = item.icon;

    return (

        <button
            type="button"
            className={cn(
                "fo-sidebar-item",
                item.active &&
                    "fo-sidebar-item--active",
                className,
            )}
            {...props}
        >

            <span
                className="fo-sidebar-item__icon"
                aria-hidden="true"
            >

                <Icon size={20} />

            </span>

            <span className="fo-sidebar-item__label">

                {item.label}

            </span>

            {item.badge && (

                <span className="fo-sidebar-item__badge">

                    {item.badge}

                </span>

            )}

        </button>

    );

}