import "./Sidebar.css";

import { Avatar } from "../../components/Avatar";
import { Stack } from "../../components/Layout/Stack";

import { cn } from "../../utils/cn";

import { SIDEBAR_NAVIGATION } from "./Sidebar.constants";
import { SidebarItem } from "../SidebarItem"

import type {
    SidebarProps,
} from "./Sidebar.types";
import { Divider } from "../../components/Layout/Divider/Divider";

export function Sidebar({
    brand,
    footer,
    className,
    ...props
}: SidebarProps) {

    return (

        <aside
            className={cn(
                "fo-sidebar",
                className,
            )}
            {...props}
        >

            {/* Brand */}

            <div className="fo-sidebar__brand">

                {brand ?? (

                    <Stack spacing="xs">

                        <h1 className="fo-sidebar__title">

                            Free Organizer

                        </h1>

                        <p className="fo-sidebar__subtitle">

                            Freelance OS

                        </p>

                    </Stack>

                )}

            </div>

            <Divider />

            {/* Navigation */}

            <nav
                className="fo-sidebar__navigation"
                aria-label="Primary"
            >

                <Stack spacing="xs">

                    {SIDEBAR_NAVIGATION.map((item) => (

                        <SidebarItem
                            key={item.id}
                            item={item}
                        />

                    ))}

                </Stack>

            </nav>

            {/* Footer */}

            <div className="fo-sidebar__footer">

                <Divider />

                {footer ?? (

                    <div className="fo-sidebar__profile">

                        <Avatar
                            name="Mohsin Rasheed"
                            size="md"
                        />

                        <Stack spacing="none">

                            <span className="fo-sidebar__user-name">

                                Mohsin Rasheed

                            </span>

                            <span className="fo-sidebar__user-role">

                                Project Manager

                            </span>

                        </Stack>

                    </div>

                )}

            </div>

        </aside>

    );

}