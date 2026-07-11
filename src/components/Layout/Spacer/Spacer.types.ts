import { HTMLAttributes } from "react";

export interface SpacerProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Spacer grows to fill available space.
     */
    grow?: number;
}