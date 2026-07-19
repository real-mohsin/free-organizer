import "./PageHero.css";

import { cn } from "../../utils/cn";

import type {
    PageHeroProps,
} from "./PageHero.types";

export function PageHero({
    children,
    className,
    ...props
}: PageHeroProps) {

    return (

        <section
            className={cn(
                "fo-page-hero",
                className,
            )}
            {...props}
        >

            {children}

        </section>

    );

}