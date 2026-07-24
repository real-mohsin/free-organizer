import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

import type {
    UseCountdownOptions,
} from "./useCountdown.types";

/**
 * Provides pause/resume countdown functionality.
 */
export function useCountdown({
    duration,
    enabled = true,
    onComplete,
}: UseCountdownOptions) {

    const timeoutRef = useRef<number>();

    const remainingRef = useRef<number>(duration);

    const startTimeRef = useRef<number>(0);

    const progressIntervalRef =
        useRef<number>();

    /**
     * Clears the active timer.
     */
    const clear = useCallback(() => {

        if (timeoutRef.current !== undefined) {

            window.clearTimeout(timeoutRef.current);

            timeoutRef.current = undefined;

        }

        if (progressIntervalRef.current !== undefined) {

            window.clearInterval(
                progressIntervalRef.current,
            );

            progressIntervalRef.current = undefined;

        }

    }, []);

    /**
     * Starts or resumes the countdown.
     */
    const start = useCallback(() => {

        if (
            !enabled ||
            duration <= 0
        ) {

            return;

        }

        clear();

        startTimeRef.current = Date.now();

        progressIntervalRef.current =
            window.setInterval(() => {

                const elapsed =

                    Date.now() -

                    startTimeRef.current;

                const remaining = Math.max(

                    0,

                    remainingRef.current - elapsed,

                );

                setProgress(

                    (remaining / duration) * 100,

                );

            }, 16);

        timeoutRef.current = window.setTimeout(() => {

            onComplete?.();

        }, remainingRef.current);

    }, [
        clear,
        duration,
        enabled,
        onComplete,
    ]);

    /**
     * Pauses the countdown.
     */
    const pause = useCallback(() => {

        clear();

        const elapsed =
            Date.now() -
            startTimeRef.current;

        remainingRef.current = Math.max(
            0,
            remainingRef.current - elapsed,
        );

    }, [
        clear,
    ]);

    const [

        progress,

        setProgress,

    ] = useState(100);

    /**
     * Resets remaining time whenever duration changes.
     */
    useEffect(() => {

        remainingRef.current = duration;

        setProgress(100);

    }, [

        duration,

    ]);

    /**
     * Starts the countdown automatically.
     */
    useEffect(() => {

        start();

        return clear;

    }, [
        start,
        clear,
    ]);

    return {

        pause,

        resume: start,

        clear,

        progress,

    };

}