import {
    useContext,
    useMemo,
} from "react";

import {
    NotificationContext,
} from "./NotificationContext";

import type {
    NotificationApi,
    NotificationOptions,
} from "./Notification.models";

/**
 * Provides access to the Notification framework.
 */
export function useNotification(): NotificationApi {

    const context =
        useContext(NotificationContext);

    if (!context) {

        throw new Error(
            "useNotification must be used within NotificationProvider.",
        );

    }

    return useMemo<NotificationApi>(() => ({

        ...context,

        success(
            options: NotificationOptions,
        ) {

            return context.notify({

                ...options,

                variant: "success",

            });

        },

        info(
            options: NotificationOptions,
        ) {

            return context.notify({

                ...options,

                variant: "info",

            });

        },

        warning(
            options: NotificationOptions,
        ) {

            return context.notify({

                ...options,

                variant: "warning",

            });

        },

        error(
            options: NotificationOptions,
        ) {

            return context.notify({

                ...options,

                variant: "error",

            });

        },

    }), [context]);

}