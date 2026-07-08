import { HTMLAttributes } from "react";

export type ThemeSwitcherOrientation =
    | "horizontal"
    | "vertical";

export interface ThemeSwitcherProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Shows labels next to the icons.
     *
     * Default: true
     */
    showLabels?: boolean;

    /**
     * Makes the switcher span the available width.
     *
     * Default: false
     */
    fullWidth?: boolean;

    /**
     * Layout direction.
     *
     * Default: "horizontal"
     */
    orientation?: ThemeSwitcherOrientation;

    /**
     * Disable theme switching.
     *
     * Default: false
     */
    disabled?: boolean;
}