import "./PageHeader.css";

import type { PageHeaderProps } from "./PageHeader.types";

import { Stack } from "../Layout/Stack";
import { cn } from "../../utils/cn";
import { HStack } from "../Layout/HStack/Hstack";

export function PageHeader({
    heading,
    subtitle,
    actions,
    className,
    ...props
}: PageHeaderProps) {

    return (

        <header
            className={cn(
                "fo-page-header",
                className,
            )}
            {...props}
        >

            <HStack
                justify="space-between"
                align="flex-start"
            >

                <Stack spacing="xs">

                    <h1 className="fo-page-header__heading">

                        {heading}

                    </h1>

                    {subtitle && (

                        <p className="fo-page-header__subtitle">

                            {subtitle}

                        </p>

                    )}

                </Stack>

                {actions && (

                    <HStack
                        className="fo-page-header__actions"
                        spacing="sm"
                        align="center"
                    >

                        {actions}

                    </HStack>

                )}

            </HStack>

        </header>

    );

}