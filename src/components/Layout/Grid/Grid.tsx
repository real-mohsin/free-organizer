import "./Grid.css";

import {
    CSSProperties,
    forwardRef,
} from "react";

import { cn } from "../../../utils/cn";

import { GridProps } from "./Grid.types";

export const Grid = forwardRef<
    HTMLDivElement,
    GridProps
>(
    (
        {
            children,

            columns = 1,

            minItemWidth,

            spacing = "md",

            fullWidth = false,

            alignItems = "stretch",

            justifyItems = "stretch",

            className,

            style,

            ...props
        },
        ref
    ) => {

        const gridStyle: CSSProperties = {
            ...style,
        };

        if (minItemWidth) {

            gridStyle.gridTemplateColumns =
                `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`;

        } else {

            gridStyle.gridTemplateColumns =
                `repeat(${columns}, minmax(0, 1fr))`;

        }

        return (
            <div
                ref={ref}
                className={cn(
                    "fo-grid",
                    `fo-grid--spacing-${spacing}`,
                    `fo-grid--align-${alignItems}`,
                    `fo-grid--justify-${justifyItems}`,
                    {
                        "fo-grid--full": fullWidth,
                    },
                    className
                )}
                style={gridStyle}
                {...props}
            >
                {children}
            </div>
        );

    }
);

Grid.displayName = "Grid";