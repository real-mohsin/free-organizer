import { Theme } from "./theme.types";

export interface UserSettings {

    theme: Theme;

    language: string;

    timezone: string;

    currency: string;

    dateFormat: string;

    compactMode: boolean;

    sidebarCollapsed: boolean;

    notifications: boolean;
}