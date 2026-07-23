import "./SidebarItem.css";

import { NavLink } from "react-router-dom";

import { Badge } from "../../components/Badge";

import { cn } from "../../utils/cn";

import type {
    SidebarItemProps,
} from "./SidebarItem.types";
import { HStack } from "../../components/Layout/HStack/Hstack";

export function SidebarItem({
    item,
    className,
    ...props
}: SidebarItemProps) {

    const Icon = item.icon;

    return (

        <NavLink
            to={item.href}
            className={({ isActive }) =>
                cn(
                    "fo-sidebar-item",
                    isActive &&
                        "fo-sidebar-item--active",
                    className,
                )
            }
            {...props}
        >

            <HStack
                className="fo-sidebar-item__content"
                justify="space-between"
                align="center"
            >

                <HStack
                    spacing="sm"
                    align="center"
                >

                    <Icon className="fo-sidebar-item__icon" />

                    <span className="fo-sidebar-item__label">

                        {item.label}

                    </span>

                </HStack>

                {item.badge && (

                    <Badge
                        size="sm"
                    >

                        {item.badge}

                    </Badge>

                )}

            </HStack>

        </NavLink>

    );

}