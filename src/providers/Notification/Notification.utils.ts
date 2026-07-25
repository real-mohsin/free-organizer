import {
    DEFAULT_NOTIFICATION_DURATION,
    DEFAULT_NOTIFICATION_VARIANT,
    MAX_VISIBLE_NOTIFICATIONS,
} from "./Notification.constants";

import type {
    Notification,
    NotificationOptions,
} from "./Notification.models";

/**
 * Generates a unique notification identifier.
 */
export function generateNotificationId(): string {

    return crypto.randomUUID();

}

/**
 * Creates a fully resolved notification model.
 */
export function createNotification(
    options: NotificationOptions,
): Notification {

    return {

        id: generateNotificationId(),

        createdAt: Date.now(),

        status: "queued",

        variant:
            options.variant ??
            DEFAULT_NOTIFICATION_VARIANT,

        duration:
            options.duration ??
            DEFAULT_NOTIFICATION_DURATION,

        dismissible:
            options.dismissible ?? true,

        title: options.title,

        description: options.description,

        action: options.action,

    };

}

/**
 * Promotes queued notifications until all visible
 * slots are filled.
 */
export function fillVisibleSlots(
    notifications: Notification[],
): Notification[] {

    const visibleCount =
        notifications.filter(

            (notification) =>

                notification.status === "visible",

        ).length;

    let remainingSlots =
        MAX_VISIBLE_NOTIFICATIONS -
        visibleCount;

    if (remainingSlots <= 0) {

        return notifications;

    }

    return notifications.map((notification) => {

        if (

            notification.status !== "queued" ||

            remainingSlots <= 0

        ) {

            return notification;

        }

        remainingSlots--;

        const updatedNotification: Notification = {

            ...notification,

            status: "visible",

        };

        return updatedNotification;

    });

}

/**
 * Marks a notification as dismissed.
 */
export function markNotificationDismissed(
    notifications: Notification[],
    id: string,
): Notification[] {

    return notifications.map((notification) => {

        if (

            notification.id !== id ||

            notification.status === "dismissed"

        ) {

            return notification;

        }

        return {

            ...notification,

            status: "dismissed",

        };

    });

}