import "./ThemeSwitcher.css";

import {
    Monitor,
    Moon,
    Sun,
} from "lucide-react";

import { Button } from "../Button";

import { cn } from "../../utils/cn";
import { useSettings } from "../../hooks/useSettings";

import { ThemeSwitcherProps } from "./ThemeSwitcher.types";

export function ThemeSwitcher({
    showLabels = true,
    fullWidth = false,
    orientation = "horizontal",
    disabled = false,
    className,
    ...props
}: ThemeSwitcherProps) {
    const {
        settings,
        updateSettings,
    } = useSettings();

    const themes = [
        {
            value: "light",
            label: "Light",
            icon: Sun,
        },
        {
            value: "dark",
            label: "Dark",
            icon: Moon,
        },
        {
            value: "system",
            label: "System",
            icon: Monitor,
        },
    ] as const;

    return (
        <div
            className={cn(
                "fo-theme-switcher",
                `fo-theme-switcher--${orientation}`,
                {
                    "fo-theme-switcher--full":
                        fullWidth,
                },
                className
            )}
            role="group"
            aria-label="Theme Switcher"
            aria-disabled={disabled}
            {...props}
        >
            {themes.map((theme) => {
                const Icon = theme.icon;

                const isActive =
                    settings.theme === theme.value;

                return (
                    <Button
                        key={theme.value}
                        type="button"
                        variant={
                            isActive
                                ? "primary"
                                : "ghost"
                        }
                        disabled={disabled}
                        leftIcon={
                            <Icon size={18} />
                        }
                        onClick={() =>
                            updateSettings({
                                theme:
                                    theme.value,
                            })
                        }
                        aria-pressed={isActive}
                        fullWidth={fullWidth}
                    >
                        {showLabels &&
                            theme.label}
                    </Button>
                );
            })}
        </div>
    );
}