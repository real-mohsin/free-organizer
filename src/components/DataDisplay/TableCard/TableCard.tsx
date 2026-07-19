import "./TableCard.css";

import { Card } from "../../Card";
import { Stack } from "../../Layout/Stack";


import { cn } from "../../../utils/cn";

import type {
    TableCardProps,
} from "./TableCard.types";
import { HStack } from "../../Layout/HStack/Hstack";

export function TableCard({
    heading,
    subtitle,
    actions,
    children,
    className,
    ...props
}: TableCardProps) {

    return (

        <Card
            className={cn(
                "fo-table-card",
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

                        <h3 className="fo-table-card__heading">

                            {heading}

                        </h3>

                        {subtitle && (

                            <p className="fo-table-card__subtitle">

                                {subtitle}

                            </p>

                        )}

                    </Stack>

                    {actions && (

                        <HStack
                            className="fo-table-card__actions"
                            spacing="sm"
                            align="center"
                        >

                            {actions}

                        </HStack>

                    )}

                </HStack>

                <div className="fo-table-card__content">

                    {children}

                </div>

            </Stack>

        </Card>

    );

}