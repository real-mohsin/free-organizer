/**
 * Maximum number of visible notifications.
 */
export const MAX_VISIBLE_NOTIFICATIONS = 4;

/**
 * Default notification duration.
 */
export const DEFAULT_NOTIFICATION_DURATION = 5000;

/**
 * Default notification variant.
 */
export const DEFAULT_NOTIFICATION_VARIANT = "info" as const;

/**
 * Default notification position.
 */
export const DEFAULT_NOTIFICATION_POSITION = "top-right" as const;

/**
 * Delay used before removing a dismissed notification.
 *
 * Allows exit animations to complete.
 */
export const NOTIFICATION_EXIT_DURATION = 250;

/**
 * Time in milliseconds for the dismiss animation.
 */
export const NOTIFICATION_DISMISS_DURATION = 250;