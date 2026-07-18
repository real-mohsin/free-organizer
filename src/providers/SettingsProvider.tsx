import {
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

import { SettingsContext } from "../context";

import { DEFAULT_SETTINGS } from "../constants/defaultSettings";

import {
    getSettings,
    saveSettings,
} from "../utils/settingsStorage";

import { UserSettings } from "../types/settings.types";

interface SettingsProviderProps {
    children: ReactNode;
}

const getSystemTheme = (): "light" | "dark" => {
    return window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
};

export function SettingsProvider({
    children,
}: SettingsProviderProps) {

    const [settings, setSettings] =
        useState<UserSettings>(() => getSettings());

    const resolvedTheme = useMemo<"light" | "dark">(() => {
        if (settings.theme === "system") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        }

        return settings.theme;
    }, [settings.theme]);

    const applyTheme = useCallback(() => {
        document.documentElement.setAttribute(
            "data-theme",
            resolvedTheme
        );
    }, [resolvedTheme]);

    useEffect(() => {
        applyTheme();
        saveSettings(settings);
    }, [settings, applyTheme]);

    useEffect(() => {

        const media = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

        const handler = () => {

            if (settings.theme === "system") {

                applyTheme();

            }

        };

        media.addEventListener(
            "change",
            handler
        );

        return () => {

            media.removeEventListener(
                "change",
                handler
            );

        };

    }, [
        settings.theme,
        applyTheme,
    ]);

    const updateSettings = useCallback(
        (
            newSettings: Partial<UserSettings>
        ) => {

            setSettings((prev) => ({

                ...prev,

                ...newSettings,

            }));

        },
        []
    );

    const resetSettings = useCallback(() => {

        setSettings(DEFAULT_SETTINGS);

    }, []);

    const value = useMemo(() => ({
        settings,
        resolvedTheme,
        updateSettings,
        resetSettings,
    }), [
        settings,
        resolvedTheme,
        updateSettings,
        resetSettings,
    ]);
    return (
        <SettingsContext.Provider
            value={value}
        >
            {children}
        </SettingsContext.Provider>
    );
}