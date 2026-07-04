import { DEFAULT_SETTINGS } from "../constants/defaultSettings";
import { UserSettings } from "../types/settings.types";

const STORAGE_KEY = "free-organizer-settings";

export function getSettings(): UserSettings {

    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {

        return DEFAULT_SETTINGS;
    }

    try {

        return {
            ...DEFAULT_SETTINGS,
            ...JSON.parse(saved)
        };

    } catch {

        return DEFAULT_SETTINGS;
    }
}

export function saveSettings(settings: UserSettings) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(settings)
    );
}