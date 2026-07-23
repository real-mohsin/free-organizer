import "./TopBar.css";

import { Bell } from "lucide-react";

import { Avatar } from "../../components/Avatar";
import { Stack } from "../../components/Layout/Stack";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";

import { cn } from "../../utils/cn";

import type { TopBarProps } from "./TopBar.types";
import { HStack } from "../../components/Layout/HStack/Hstack";
import { IconButton } from "../../components/IconButton";

export function TopBar({
    heading,
    actions,
    className,
    ...props
}: TopBarProps) {

    return (

        <header
            className={cn(
                "fo-topbar",
                className,
            )}
            {...props}
        >

            <Stack
                className="fo-topbar__left"
                spacing="xs"
            >

                {heading}

            </Stack>

            <HStack
                className="fo-topbar__right"
                spacing="md"
                align="center"
            >

                {actions}

                <ThemeSwitcher />

                <IconButton
                    variant="ghost"
                    aria-label="Notifications"
                >

                    <Bell size={18} />

                </IconButton>

                <HStack
                    className="fo-topbar__profile"
                    spacing="sm"
                    align="center"
                >

                    <Avatar
                        name="Mohsin Rasheed"
                    />

                    <Stack spacing="none">

                        <span className="fo-topbar__user-name">

                            Mohsin Rasheed

                        </span>

                        <span className="fo-topbar__user-role">

                            Project Manager

                        </span>

                    </Stack>

                </HStack>

            </HStack>

        </header>

    );

}