import type {
    HTMLAttributes,
} from "react";

import type {
    NotificationPosition,
} from "../../../providers/Notification/Notification.models";

/**
 * Props for the NotificationContainer component.
 */
export interface NotificationContainerProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Screen position.
     *
     * @default "top-right"
     */
    position?: NotificationPosition;

}