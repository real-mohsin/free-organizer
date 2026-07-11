import "./Divider.css";

import { forwardRef } from "react";

import { cn } from "../../../utils/cn";

import { DividerProps } from "./Divider.types";

export const Divider = forwardRef<
    HTMLHRElement | HTMLDivElement,
    DividerProps
>(
    (
        {
            orientation = "horizontal",

            variant = "solid",

            spacing = "md",

            labelAlign = "center",

            children,

            className,

            ...props
        },
        ref
    ) => {

        const classes = cn(
            "fo-divider",
            `fo-divider--${orientation}`,
            `fo-divider--${variant}`,
            `fo-divider--spacing-${spacing}`,
            {
                [`fo-divider--label-${labelAlign}`]:
                    Boolean(children),
            },
            className
        );

        if (!children) {
            return (
                <hr
                    ref={ref as React.Ref<HTMLHRElement>}
                    className={classes}
                    {...props}
                />
            );
        }

        return (
            <div
                ref={ref as React.Ref<HTMLDivElement>}
                className={classes}
                role="separator"
                aria-orientation={orientation}
            >
                <span className="fo-divider__line" />

                <span className="fo-divider__label">
                    {children}
                </span>

                <span className="fo-divider__line" />
            </div>
        );

    }
);

Divider.displayName = "Divider";