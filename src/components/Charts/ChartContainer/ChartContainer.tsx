import "./ChartContainer.css";

import { cn } from "../../../utils/cn";

import type {
    ChartContainerProps,
} from "./ChartContainer.types";

export function ChartContainer({
    children,
    height = "20rem",
    className,
    style,
    ...props
}: ChartContainerProps) {

    return (

        <div
            className={cn(
                "fo-chart-container",
                className,
            )}
            style={{
                height,
                ...style,
            }}
            {...props}
        >

            {children}

        </div>

    );

}