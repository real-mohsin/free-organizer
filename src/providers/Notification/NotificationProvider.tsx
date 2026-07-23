import {
    useCallback,
    useMemo,
    useState,
} from "react";

import {
    NotificationContext,
} from "./NotificationContext";

import {
    DEFAULT_NOTIFICATION_DURATION,
    DEFAULT_NOTIFICATION_VARIANT,
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
    generateNotificationId,
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
     * Displays a notification.
     */
    const notify = useCallback((
        options: NotificationOptions,
    ) => {

        const id = generateNotificationId();

        const notification: Notification = {

            id,

            createdAt: Date.now(),

            status: "visible",

            variant:
                options.variant ??
                DEFAULT_NOTIFICATION_VARIANT,

            duration:
                options.duration ??
                DEFAULT_NOTIFICATION_DURATION,

            dismissible:
                options.dismissible ?? true,

            title: options.title,

            description:
                options.description,

            action: options.action,

        };

        setNotifications((current) => [

            ...current,

            notification,

        ]);

        return id;

    }, []);

    /**
     * Dismisses a notification.
     */
    const dismiss = useCallback((
        id: string,
    ) => {

        setNotifications((current) =>
            current.filter(
                (notification) =>
                    notification.id !== id,
            ),
        );

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

    return (

        <NotificationContext.Provider
            value={value}
        >

            {children}

            <NotificationContainer />

        </NotificationContext.Provider>

    );

}