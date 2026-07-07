import "./Card.css";

import { cn } from "../../utils/cn";

import { CardProps } from "./Card.types";

export function Card({
    heading,
    description,
    actions,
    footer,
    children,
    variant = "default",
    padding = "md",
    fullWidth = false,
    className,
    ...props
}: CardProps) {

    const classes = cn(
        "fo-card",
        `fo-card--${variant}`,
        `fo-card--padding-${padding}`,
        {
            "fo-card--full": fullWidth,
        },
        className
    );

    const hasHeader = Boolean(
        heading || description || actions
    );
    return (
        <div
            className={classes}
            {...props}
        >
            {hasHeader && (
                <div className="fo-card__header">
                    <div className="fo-card__header-content">
                        {heading && (
                            <h3 className="fo-card__heading">
                                {heading}
                            </h3>
                        )}

                        {description && (
                            <p className="fo-card__description">
                                {description}
                            </p>
                        )}
                    </div>

                    {actions && (
                        <div className="fo-card__actions">
                            {actions}
                        </div>
                    )}
                </div>
            )}

            <div className="fo-card__body">
                {children}
            </div>

            {footer && (
                <div className="fo-card__footer">
                    {footer}
                </div>
            )}
        </div>
    );
}