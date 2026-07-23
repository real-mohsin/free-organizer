import type { ReactNode } from "react";

import type {
    AuthenticatedUser,
    LoginRequest
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
    request: LoginRequest,
) => Promise<void>;

    /**
     * Sign out.
     */
    logout: () => void;

}

export interface AuthProviderProps {

    children: ReactNode;

}