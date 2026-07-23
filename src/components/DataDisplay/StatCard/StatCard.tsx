import "./StatCard.css";

import { Card } from "../../Card";
import { Stack } from "../../Layout/Stack";

import { cn } from "../../../utils/cn";

import type { StatCardProps } from "./StatCard.types";
import { HStack } from "../../Layout/HStack/Hstack";

export function StatCard({
    heading,
    value,
    footer,
    icon,
    actions,
    variant = "default",
    className,
    ...props
}: StatCardProps) {

    return (

        <Card
            className={cn(
                "fo-stat-card",
                variant !== "default" &&
                `fo-stat-card--${variant}`,
                className,
            )}
            {...props}
        >

            <Stack spacing="lg">

                <HStack
                    justify="space-between"
                    align="center"
                >

                    <HStack
                        spacing="sm"
                        align="center"
                    >

                        {icon && (

                            <span
                                className={cn(
                                    "fo-stat-card__icon",
                                    variant !== "default" &&
                                    `fo-stat-card__icon--${variant}`,
                                )}
                                aria-hidden="true"
                            >
                                {icon}
                            </span>

                        )}

                        <h3 className="fo-stat-card__heading">

                            {heading}

                        </h3>

                    </HStack>

                    {actions && (

                        <HStack
                            className="fo-stat-card__actions"
                            spacing="sm"
                            align="center"
                        >

                            {actions}

                        </HStack>

                    )}

                </HStack>

                <p className="fo-stat-card__value">

                    {value}

                </p>

                {footer && (

                    <p className="fo-stat-card__footer">

                        {footer}

                    </p>

                )}

            </Stack>

        </Card>

    );

}