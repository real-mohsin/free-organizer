import {
    Navigate,
    Outlet,
    useLocation,
} from "react-router-dom";

import { useAuth } from "../hooks";

/**
 * Protects routes that require authentication.
 */
export function ProtectedRoute() {

    const {
        isAuthenticated,
        isLoading,
    } = useAuth();

    const location = useLocation();

    if (isLoading) {

        return null;

    }

    if (!isAuthenticated) {

        return (
            <Navigate
                to="/login"
                state={{
                    from: location,
                }}
                replace
            />
        );

    }

    return <Outlet />;

}