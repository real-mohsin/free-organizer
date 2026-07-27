import "./EmptyState.css";

import { cn } from "../../utils/cn";

import { Stack } from "../Layout/Stack";

import type {
    EmptyStateProps,
} from "./EmptyState.types";

export function EmptyState({

    visual,

    heading,

    description,

    actions,

    className,

    ...props

}: EmptyStateProps) {

    return (

        <div

            className={cn(

                "fo-empty-state",

                className,

            )}

            {...props}

        >

            <Stack
                align="center"
                spacing="lg"
            >

                {visual && (

                    <div className="fo-empty-state__illustration">

                        {visual}

                    </div>

                )}

                <Stack
                    align="center"
                    spacing="sm"
                >

                    <h2 className="fo-empty-state__title">

                        {heading}

                    </h2>

                    {description && (

                        <p className="fo-empty-state__description">

                            {description}

                        </p>

                    )}

                </Stack>

                {actions && (

                    <div className="fo-empty-state__actions">

                        {actions}

                    </div>

                )}

            </Stack>

        </div>

    );

}