import "./ChartCard.css";

import { Card } from "../../Card";
import { Stack } from "../../Layout/Stack";


import { cn } from "../../../utils/cn";

import type { ChartCardProps } from "./ChartCard.types";
import { HStack } from "../../Layout/HStack/Hstack";

export function ChartCard({
    heading,
    subtitle,
    actions,
    children,
    className,
    ...props
}: ChartCardProps) {

    return (

        <Card
            className={cn(
                "fo-chart-card",
                className,
            )}
            {...props}
        >

            <Stack spacing="lg">

                <HStack
                    justify="space-between"
                    align="flex-start"
                >

                    <Stack spacing="xs">

                        <h3 className="fo-chart-card__heading">

                            {heading}

                        </h3>

                        {subtitle && (

                            <p className="fo-chart-card__subtitle">

                                {subtitle}

                            </p>

                        )}

                    </Stack>

                    {actions && (

                        <HStack
                            className="fo-chart-card__actions"
                            spacing="sm"
                            align="center"
                        >

                            {actions}

                        </HStack>

                    )}

                </HStack>

                <section className="fo-chart-card__content">

                    {children}

                </section>

            </Stack>

        </Card>

    );

}