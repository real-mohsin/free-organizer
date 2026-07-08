import {
    HTMLAttributes,
    ReactNode,
} from "react";

export type AvatarSize =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl";

export type AvatarVariant =
    | "circle"
    | "rounded";

export interface AvatarProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Avatar image.
     */
    src?: string;

    /**
     * Image alt text.
     */
    alt?: string;

    /**
     * User name.
     * Used to generate initials.
     */
    name?: string;

    /**
     * Custom fallback icon.
     */
    icon?: ReactNode;

    /**
     * Avatar size.
     */
    size?: AvatarSize;

    /**
     * Shape.
     */
    variant?: AvatarVariant;

    /**
     * Show online indicator.
     */
    online?: boolean;
}