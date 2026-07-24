import type {
    HTMLAttributes,
} from "react";

import type {
    Notification as NotificationModel,
} from "../../providers/Notification/Notification.models";

/**
 * Props for the Notification component.
 */
export interface NotificationProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Notification to display.
     */
    notification: NotificationModel;

    /**
     * Invoked when the notification is dismissed.
     */
    onDismiss?: () => void;

}