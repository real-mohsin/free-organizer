import type {
    HTMLAttributes,
    ReactNode,
} from "react";

export interface AuthHeroProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Hero heading.
     */
    heading?: ReactNode;

    /**
     * Supporting text.
     */
    supportingText?: ReactNode;

    /**
     * Feature list.
     */
    features?: readonly {
        id: string;
        content: ReactNode;
    }[];

    /**
     * Optional illustration.
     */
    illustration?: ReactNode;
}