import {
    createContext,
} from "react";

import type {
    NotificationContextValue,
} from "./Notification.models";

/**
 * Notification context.
 */
export const NotificationContext =
    createContext<NotificationContextValue | null>(
        null,
    );