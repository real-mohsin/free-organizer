import {
    useCallback,
    useMemo,
    useState,
    useEffect
} from "react";

import {
    NotificationContext,
} from "./NotificationContext";

import {
    DEFAULT_NOTIFICATION_DURATION,
    DEFAULT_NOTIFICATION_VARIANT,
    MAX_VISIBLE_NOTIFICATIONS,
    NOTIFICATION_DISMISS_DURATION,
} from "./Notification.constants";

import type {
    Notification,
    NotificationContextValue,
    NotificationOptions,
} from "./Notification.models";

import type {
    PropsWithChildren,
} from "react";

import {
    createNotification,
    fillVisibleSlots,
    markNotificationDismissed,
} from "./Notification.utils";
import { NotificationContainer } from "../../components/Notification/Container/NotificationContainer";

export function NotificationProvider({
    children,
}: PropsWithChildren) {

    const [
        notifications,
        setNotifications,
    ] = useState<Notification[]>([]);

    /**
 * Promotes queued notifications to visible
 * while respecting the maximum visible limit.
 */
    const promoteQueuedNotifications = useCallback((
        notifications: Notification[],
    ): Notification[] => {

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

    }, []);

    /**
     * Displays a notification.
     */
    const notify = useCallback((
        options: NotificationOptions,
    ) => {

        const notification =
            createNotification(options);

        setNotifications((current) =>

            fillVisibleSlots([

                ...current,

                notification,

            ]),

        );

        return notification.id;

    }, []);

    /**
     * Dismisses a notification.
     */
    const dismiss = useCallback((
        id: string,
    ) => {

        setNotifications((current) =>

            markNotificationDismissed(

                current,

                id,

            ),

        );

        window.setTimeout(() => {

            setNotifications((current) =>

                fillVisibleSlots(

                    current.filter(

                        (notification) =>

                            notification.id !== id,

                    ),

                ),

            );

        }, NOTIFICATION_DISMISS_DURATION);

    }, []);

    /**
     * Removes every notification.
     */
    const clear = useCallback(() => {

        setNotifications([]);

    }, []);

    const value =
        useMemo<NotificationContextValue>(() => ({

            notifications,

            notify,

            dismiss,

            clear,

        }), [

            notifications,

            notify,

            dismiss,

            clear,

        ]);

    /**
* Dismiss the latest notification when Escape is pressed.
*/
    useEffect(() => {

        const handleKeyDown = (
            event: KeyboardEvent,
        ) => {

            if (event.key !== "Escape") {

                return;

            }

            const latestNotification =

                [...notifications]

                    .reverse()

                    .find(

                        (notification) =>

                            notification.status === "visible",

                    );

            if (!latestNotification) {

                return;

            }

            dismiss(
                latestNotification.id,
            );

        };

        window.addEventListener(
            "keydown",
            handleKeyDown,
        );

        return () => {

            window.removeEventListener(
                "keydown",
                handleKeyDown,
            );

        };

    }, [

        notifications,

        dismiss,

    ]);

    return (

        <NotificationContext.Provider
            value={value}
        >

            {children}

            <NotificationContainer />

        </NotificationContext.Provider>

    );

}