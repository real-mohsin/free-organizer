import { UserSettings } from "../types/settings.types";

export const DEFAULT_SETTINGS: UserSettings = {

    theme: "system",

    language: "en",

    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    currency: "USD",

    dateFormat: "DD/MM/YYYY",

    compactMode: false,

    sidebarCollapsed: false,

    notifications: true
};