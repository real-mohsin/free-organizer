import "./NotificationContainer.css";

import { Notification } from "../Notification";

import { cn } from "../../../utils/cn";

import {
    DEFAULT_NOTIFICATION_POSITION,
} from "../../../providers/Notification/Notification.constants";

import {
    useNotification,
} from "../../../providers/Notification";

import type {
    NotificationContainerProps,
} from "./NotificationContainer.types";

export function NotificationContainer({
    position = DEFAULT_NOTIFICATION_POSITION,
    className,
    ...props
}: NotificationContainerProps) {

    const {
        notifications,
        dismiss,
    } = useNotification();

    return (

        <div
            className={cn(
                "fo-notification-container",
                `fo-notification-container--${position}`,
                className,
            )}
            aria-live="polite"
            aria-atomic="true"
            {...props}
        >

            {notifications.map((notification) => (

                <Notification
                    key={notification.id}
                    notification={notification}
                    onDismiss={() =>
                        dismiss(notification.id)
                    }
                />

            ))}

        </div>

    );

}