import {
    HTMLAttributes,
    ReactNode,
} from "react";

export type ContainerSize =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "fluid";

export interface ContainerProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Container content.
     */
    children: ReactNode;

    /**
     * Maximum width.
     */
    size?: ContainerSize;

    /**
     * Center container horizontally.
     */
    align?: "left" | "center";

    /**
     * Take full available width.
     */
    fullWidth?: boolean;
}