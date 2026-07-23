import { createContext } from "react";

import { UserSettings } from "../types/settings.types";

export interface SettingsContextType {
    settings: UserSettings;

    resolvedTheme: "light" | "dark";

    updateSettings: (
        settings: Partial<UserSettings>
    ) => void;

    resetSettings: () => void;
}

export const SettingsContext = createContext<
    SettingsContextType | undefined
>(undefined);