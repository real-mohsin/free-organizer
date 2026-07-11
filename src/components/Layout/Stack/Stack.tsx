import "./Stack.css";

import { forwardRef } from "react";

import { cn } from "../../../utils/cn";

import { StackProps } from "./Stack.types";

export const Stack = forwardRef<
    HTMLDivElement,
    StackProps
>(
    (
        {
            children,

            spacing = "md",

            align = "stretch",

            justify = "flex-start",

            wrap = false,

            fullWidth = false,

            className,

            style,

            ...props
        },
        ref
    ) => {

        const classes = cn(
            "fo-stack",
            `fo-stack--spacing-${spacing}`,
            `fo-stack--align-${align}`,
            `fo-stack--justify-${justify}`,
            {
                "fo-stack--wrap": wrap,
                "fo-stack--full": fullWidth,
            },
            className
        );

        return (
            <div
                ref={ref}
                className={classes}
                style={style}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Stack.displayName = "Stack";