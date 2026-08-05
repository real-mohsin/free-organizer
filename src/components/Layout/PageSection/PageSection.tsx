import "./PageSection.css";

import { Card } from "../../Card";
import { HStack } from "../HStack/Hstack";
import { Stack } from "../Stack";

import { cn } from "../../../utils/cn";

import type {
    PageSectionProps,
} from "./PageSection.types";

export function PageSection({

    heading,

    description,

    actions,

    children,

    className,

    ...props

}: PageSectionProps) {

    return (

        <Card
            className={cn(
                "fo-page-section",
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

                        <h2 className="fo-page-section__title">

                            {heading}

                        </h2>

                        {description && (

                            <p className="fo-page-section__description">

                                {description}

                            </p>

                        )}

                    </Stack>

                    {actions}

                </HStack>

                {children}

            </Stack>

        </Card>

    );

}