import type {
    ReactNode,
} from "react";

/**
 * Available notification variants.
 */
export type NotificationVariant =
    | "info"
    | "success"
    | "warning"
    | "error";

/**
 * Supported notification positions.
 */
export type NotificationPosition =
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";

/**
 * Notification lifecycle state.
 */
export type NotificationStatus =
    | "queued"
    | "visible"
    | "dismissed";

/**
 * Action button displayed inside a notification.
 */
export interface NotificationAction {

    /**
     * Button label.
     */
    label: string;

    /**
     * Action callback.
     */
    onClick: () => void;

}

/**
 * Options supplied when creating a notification.
 */
export interface NotificationOptions {

    /**
     * Notification variant.
     */
    variant?: NotificationVariant;

    /**
     * Optional title.
     */
    title?: ReactNode;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Auto dismiss duration in milliseconds.
     */
    duration?: number;

    /**
     * Whether the notification can be dismissed manually.
     */
    dismissible?: boolean;

    /**
     * Optional action button.
     */
    action?: NotificationAction;

}

/**
 * Internal notification model.
 */
export interface Notification
    extends NotificationOptions {

    /**
     * Unique identifier.
     */
    id: string;

    /**
     * Notification variant.
     */
    variant: NotificationVariant;

    /**
     * Lifecycle state.
     */
    status: NotificationStatus;

    /**
     * Creation timestamp.
     */
    createdAt: number;

}

/**
 * Notification Provider API.
 */
export interface NotificationContextValue {

    /**
     * Active notifications.
     */
    notifications: Notification[];

    /**
     * Display a notification.
     */
    notify(
        options: NotificationOptions,
    ): string;

    /**
     * Dismiss a notification.
     */
    dismiss(
        id: string,
    ): void;

    /**
     * Remove all notifications.
     */
    clear(): void;

}

export interface NotificationApi
    extends NotificationContextValue {

    success(
        options: NotificationOptions,
    ): string;

    info(
        options: NotificationOptions,
    ): string;

    warning(
        options: NotificationOptions,
    ): string;

    error(
        options: NotificationOptions,
    ): string;

}