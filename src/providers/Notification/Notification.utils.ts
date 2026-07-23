/**
 * Notification utility functions.
 */

/**
 * Generates a unique notification identifier.
 */
export function generateNotificationId(): string {

    return crypto.randomUUID();

}