import "./Spacer.css";

import { forwardRef } from "react";

import { cn } from "../../../utils/cn";

import { SpacerProps } from "./Spacer.types";

export const Spacer = forwardRef<
    HTMLDivElement,
    SpacerProps
>(
    (
        {
            grow = 1,
            className,
            style,
            ...props
        },
        ref
    ) => {

        return (
            <div
                ref={ref}
                className={cn(
                    "fo-spacer",
                    className
                )}
                style={{
                    flex: grow,
                    ...style,
                }}
                aria-hidden="true"
                {...props}
            />
        );

    }
);

Spacer.displayName = "Spacer";