import { Theme } from "../types/theme.types";
import { useSettings } from "./useSettings";

export function useTheme() {
    const {
        settings,
        resolvedTheme,
        updateSettings,
    } = useSettings();

    const setTheme = (theme: Theme) => {
        updateSettings({ theme });
    };

    const toggleTheme = () => {
        updateSettings({
            theme: resolvedTheme === "light" ? "dark" : "light",
        });
    };

    return {
        theme: settings.theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
    };
}