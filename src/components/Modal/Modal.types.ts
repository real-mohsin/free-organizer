import {
    HTMLAttributes,
    ReactNode,
} from "react";

export type ModalSize =
    | "sm"
    | "md"
    | "lg"
    | "xl";

export interface ModalProps
    extends Omit<
        HTMLAttributes<HTMLDivElement>,
        "title"
    > {

    /**
     * Controls visibility.
     */
    open: boolean;

    /**
     * Called when modal requests closing.
     */
    onClose: () => void;

    /**
     * Modal heading.
     */
    heading?: ReactNode;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Footer content.
     */
    footer?: ReactNode;

    /**
     * Modal content.
     */
    children: ReactNode;

    /**
     * Modal width.
     */
    size?: ModalSize;

    /**
     * Close when clicking overlay.
     */
    closeOnOverlayClick?: boolean;

    /**
     * Show close button.
     */
    showCloseButton?: boolean;
}