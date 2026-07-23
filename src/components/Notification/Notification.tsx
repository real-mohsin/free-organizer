import "./Notification.css";

import { X } from "lucide-react";

import { cn } from "../../utils/cn";

import type {
    NotificationProps,
} from "./Notification.types";
import { Stack } from "../Layout/Stack";
import { HStack } from "../Layout/HStack/Hstack";
import { IconButton } from "../IconButton";

export function Notification({
    notification,
    onClose,
    className,
    ...props
}: NotificationProps) {

    const {

        title,
        description,
        dismissible,
        action,

    } = notification;

    return (

        <div
            className={cn(
                "fo-notification",
                `fo-notification--${notification.variant}`,
                className,
            )}
            role="status"
            {...props}
        >

            <Stack spacing="md" className="fo-notification__content">

                <HStack
                    justify="space-between"
                    align="flex-start"
                >

                    <Stack spacing="xs">

                        {title && (

                            <h4 className="fo-notification__title">

                                {title}

                            </h4>

                        )}

                        {description && (

                            <p className="fo-notification__description">

                                {description}

                            </p>

                        )}

                    </Stack>

                    {dismissible && (

                        <IconButton
                            variant="ghost"
                            aria-label="Dismiss notification"
                            onClick={onClose}
                        >

                            <X size={16} />

                        </IconButton>

                    )}

                </HStack>

                {action && (

                    <div className="fo-notification__action">

                        <button
                            type="button"
                            onClick={action.onClick}
                        >

                            {action.label}

                        </button>

                    </div>

                )}

            </Stack>

        </div>

    );

}