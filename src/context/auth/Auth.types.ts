import type { ReactNode } from "react";

import type {
    AuthenticatedUser,
} from "../../services/auth";

export interface AuthContextValue {

    /**
     * Current authenticated user.
     */
    user: AuthenticatedUser | null;

    /**
     * Authentication loading state.
     */
    isLoading: boolean;

    /**
     * Authentication status.
     */
    isAuthenticated: boolean;

    /**
     * Sign in.
     */
    login: (
        email: string,
        password: string,
        rememberMe: boolean,
    ) => Promise<void>;

    /**
     * Sign out.
     */
    logout: () => void;

}

export interface AuthProviderProps {

    children: ReactNode;

}