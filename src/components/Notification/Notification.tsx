import "./Notification.css";

import { X } from "lucide-react";

import { cn } from "../../utils/cn";

import type {
    NotificationProps,
} from "./Notification.types";
import { Stack } from "../Layout/Stack";
import { IconButton } from "../IconButton";
import { NotificationIcon } from "./NotificationIcon";
import { Button } from "../Button";
import { useCountdown } from "../../hooks/useCountdown";

export function Notification({
    notification,
    onDismiss,
    className,
    ...props
}: NotificationProps) {

    const {

        title,
        description,
        dismissible,
        action,
        duration,
        variant,
        status: notificationStatus,
    } = notification;

    const {

        pause: pauseCountdown,

        resume: resumeCountdown,

        progress,

    } = useCountdown({

        duration,

        enabled:
            notificationStatus === "visible",

        onComplete: onDismiss,

    });

    return (

        <div
            onMouseEnter={pauseCountdown}
            onMouseLeave={resumeCountdown}
            className={cn(
                "fo-notification",
                `fo-notification--${variant}`,
                `fo-notification--${notificationStatus}`,
                className,
            )}
            role={
                variant === "error"
                    ? "alert"
                    : "status"
            }
            {...props}
        >

            <Stack spacing="md" className="fo-notification__content">

                <div className="fo-notification__header">
                    <div className="fo-notification__heading">
                        <NotificationIcon
                            variant={variant}
                        />
                        <Stack spacing="xs">

                            {title && (

                                <h4 className="fo-notification__title">

                                    {title}

                                </h4>

                            )}

                            {description && (

                                <p className="fo-notification__description">

                                    {description}

                                </p>

                            )}

                        </Stack>
                    </div>
                    {dismissible && (

                        <IconButton
                            variant="ghost"
                            aria-label="Dismiss notification"
                            onClick={onDismiss}
                        >

                            <X size={16} />

                        </IconButton>

                    )}

                </div>

                {action && (

                    <div className="fo-notification__action">

                        <Button variant="ghost" size="sm" onClick={action.onClick}>
                            {action.label}
                        </Button>

                    </div>

                )}
                {duration > 0 && (
                    <div className="fo-notification__progress">

                        <div

                            className="fo-notification__progress-bar"

                            style={{

                                width: `${progress}%`,

                            }}

                        />

                    </div>
                )}

            </Stack>



        </div>

    );

}