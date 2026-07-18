import {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

import { AuthContext } from "../../context/auth";

import type {
    AuthProviderProps,
} from "../../context/auth";

import {
    AUTH_STORAGE_KEY,
} from "../../services/auth/auth.constants";

import {
    authService,
    type AuthenticatedUser,
    type LoginRequest,
    LoginResponse
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

        const stored =
            localStorage.getItem(
                AUTH_STORAGE_KEY,
            );

        if (stored) {

            const session =
                JSON.parse(stored) as LoginResponse;

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

        localStorage.removeItem(
            AUTH_STORAGE_KEY,
        );

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