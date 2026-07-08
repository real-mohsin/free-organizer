import "./Avatar.css";

import {
    User,
} from "lucide-react";

import {
    useEffect,
    useMemo,
    useState,
} from "react";

import { cn } from "../../utils/cn";

import { AvatarProps } from "./Avatar.types";

export function Avatar({
    src,
    alt,
    name,
    icon,
    size = "md",
    variant = "circle",
    online = false,
    className,
    ...props
}: AvatarProps) {

    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        setImageError(false);
    }, [src]);

    const initials = useMemo(() => {

        if (!name) {
            return "";
        }

        const parts = name
            .trim()
            .split(/\s+/)
            .filter(Boolean);

        if (parts.length === 1) {
            return parts[0]
                .charAt(0)
                .toUpperCase();
        }

        return (
            parts[0].charAt(0) +
            parts[parts.length - 1].charAt(0)
        ).toUpperCase();

    }, [name]);

    const classes = cn(
        "fo-avatar",
        `fo-avatar--${size}`,
        `fo-avatar--${variant}`,
        className
    );

    const renderContent = () => {

        if (src && !imageError) {
            return (
                <img
                    src={src}
                    alt={alt ?? name ?? "Avatar"}
                    className="fo-avatar__image"
                    onError={() => setImageError(true)}
                />
            );
        }

        if (initials) {
            return (
                <span className="fo-avatar__initials">
                    {initials}
                </span>
            );
        }

        return (
            <span
                className="fo-avatar__icon"
                aria-hidden="true"
            >
                {icon ?? <User />}
            </span>
        );
    };

    return (
        <div
            className={classes}
            role="img"
            aria-label={alt ?? name ?? "Avatar"}
            {...props}
        >
            {renderContent()}

            {online && (
                <span
                    className="fo-avatar__status"
                    aria-label="Online"
                />
            )}
        </div>
    );
}