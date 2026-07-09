import "./Modal.css";

import {
    useEffect,
    useId
} from "react";

import {
    X,
} from "lucide-react";

import { cn } from "../../utils/cn";

import { ModalProps } from "./Modal.types";

export function Modal({
    open,
    onClose,

    heading,
    description,
    footer,

    children,

    size = "md",

    closeOnOverlayClick = true,

    showCloseButton = true,

    className,

    ...props
}: ModalProps) {

    const headingId = useId();
    const descriptionId = useId();

    useEffect(() => {

        if (!open) {
            return;
        }

        const handleKeyDown = (
            event: KeyboardEvent
        ) => {

            if (event.key === "Escape") {
                onClose();
            }

        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };

    }, [
        open,
        onClose,
    ]);

    if (!open) {
        return null;
    }

    const handleOverlayClick = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {

        if (
            closeOnOverlayClick &&
            event.target === event.currentTarget
        ) {
            onClose();
        }

    };

    const handleDialogClick = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {

        event.stopPropagation();

    };

    return (
        <div
            className="fo-modal-overlay"
            onClick={handleOverlayClick}
        >
            <div
                className={cn(
                    "fo-modal",
                    `fo-modal--${size}`,
                    className
                )}
                role="dialog"
                aria-modal="true"
                aria-labelledby={
                    heading ? headingId : undefined
                }
                aria-describedby={
                    description ? descriptionId : undefined
                }
                onClick={handleDialogClick}
                {...props}
            >
                {(heading || showCloseButton) && (
                    <div className="fo-modal__header">

                        <div>

                            {heading && (
                                <h2
                                    id={headingId}
                                    className="fo-modal__heading"
                                >
                                    {heading}
                                </h2>
                            )}

                            {description && (
                                <p
                                    id={descriptionId}
                                    className="fo-modal__description"
                                >
                                    {description}
                                </p>
                            )}

                        </div>

                        {showCloseButton && (
                            <button
                                type="button"
                                className="fo-modal__close"
                                onClick={onClose}
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>
                        )}

                    </div>
                )}

                <div className="fo-modal__body">
                    {children}
                </div>

                {footer && (
                    <div className="fo-modal__footer">
                        {footer}
                    </div>
                )}

            </div>
        </div>
    );
}