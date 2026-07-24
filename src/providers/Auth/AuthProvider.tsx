import {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

import { AuthContext } from "./index";

import type {
    AuthProviderProps,
} from "./index";

import {
    authService,
    type AuthenticatedUser,
    type LoginRequest
} from "../../services/auth";


export function AuthProvider({
    children,
}: AuthProviderProps) {

    const [user, setUser] =
        useState<AuthenticatedUser | null>(null);

    const [isLoading, setIsLoading] =
        useState(true);

    /**
     * Restore authentication session.
     */
    useEffect(() => {

        const session =
            authService.restoreSession();

        if (session) {

            setUser(session.user);

        }

        setIsLoading(false);

    }, []);

    /**
     * Sign in.
     */
    const login = useCallback(
        async (
            request: LoginRequest,
        ) => {

            const response =
                await authService.login(
                    request,
                );

            setUser(response.user);

        },
        [],
    );

    /**
     * Sign out.
     */
    const logout = useCallback(() => {

        authService.clearSession();

        setUser(null);

    }, []);

    const value = useMemo(
        () => ({

            user,

            isLoading,

            isAuthenticated:
                user !== null,

            login,

            logout,

        }),
        [
            user,
            isLoading,
            login,
            logout,
        ],
    );

    return (

        <AuthContext.Provider value={value}>

            {children}

        </AuthContext.Provider>

    );

}