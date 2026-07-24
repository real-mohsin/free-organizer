/**
 * Configuration for the countdown hook.
 */
export interface UseCountdownOptions {

    /**
     * Countdown duration in milliseconds.
     */
    duration: number;

    /**
     * Whether the countdown is active.
     */
    enabled?: boolean;

    /**
     * Invoked when the countdown finishes.
     */
    onComplete?: () => void;

}