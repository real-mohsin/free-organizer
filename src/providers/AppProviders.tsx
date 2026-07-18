import { AuthProvider } from "./auth/AuthProvider";
import { SettingsProvider } from "./SettingsProvider";

export function AppProviders({
    children,
}: {
    children: React.ReactNode;
}) {

    return (

        <SettingsProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </SettingsProvider>
    );

}