import "./Container.css";

import { forwardRef } from "react";

import { cn } from "../../../utils/cn";

import { ContainerProps } from "./Container.types";

export const Container = forwardRef<
    HTMLDivElement,
    ContainerProps
>(
    (
        {
            children,

            size = "xl",

            align = "center",

            fullWidth = false,

            className,

            ...props
        },
        ref
    ) => {

        const classes = cn(
            "fo-container",
            `fo-container--${size}`,
            {
                "fo-container--centered": align,
                "fo-container--full": fullWidth,
            },
            className
        );

        return (
            <div
                ref={ref}
                className={classes}
                {...props}
            >
                {children}
            </div>
        );

    }
);

Container.displayName = "Container";