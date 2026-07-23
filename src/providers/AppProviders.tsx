import { AuthProvider } from "./Auth/AuthProvider";
import { NotificationProvider } from "./Notification";
import { SettingsProvider } from "./Settings/SettingsProvider";

export function AppProviders({
    children,
}: {
    children: React.ReactNode;
}) {

    return (

        <SettingsProvider>
            <AuthProvider>
                <NotificationProvider>
                    {children}
                </NotificationProvider>
            </AuthProvider>
        </SettingsProvider>
    );

}