import {
    CheckCircle2,
    CircleAlert,
    CircleX,
    Info,
} from "lucide-react";

import { cn } from "../../utils/cn";

import type {
    NotificationVariant,
} from "../../providers/Notification/Notification.models";

interface NotificationIconProps {

    variant: NotificationVariant;

    className?: string;

}

export function NotificationIcon({
    variant,
    className,
}: NotificationIconProps) {

    switch (variant) {

        case "success":

            return (

                <CheckCircle2
                    className={cn(
                        "fo-notification__icon",
                        "fo-notification__icon--success",
                        className,
                    )}
                    size={20}
                />

            );

        case "warning":

            return (

                <CircleAlert
                    className={cn(
                        "fo-notification__icon",
                        "fo-notification__icon--warning",
                        className,
                    )}
                    size={20}
                />

            );

        case "error":

            return (

                <CircleX
                    className={cn(
                        "fo-notification__icon",
                        "fo-notification__icon--error",
                        className,
                    )}
                    size={20}
                />

            );

        case "info":
        default:

            return (

                <Info
                    className={cn(
                        "fo-notification__icon",
                        "fo-notification__icon--info",
                        className,
                    )}
                    size={20}
                />

            );

    }

}