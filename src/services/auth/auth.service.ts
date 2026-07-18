import { AUTH_STORAGE_KEY } from "./auth.constants";
import { mockLogin } from "./auth.mock";

import type {
    LoginRequest,
    LoginResponse,
} from "./auth.types";

/**
 * Authentication service.
 */
class AuthService {

    /**
     * Authenticate a user.
     */
    async login(
        request: LoginRequest,
    ): Promise<LoginResponse> {

        const response =
            await mockLogin(request);

        localStorage.setItem(
            AUTH_STORAGE_KEY,
            JSON.stringify(response),
        );

        return response;

    }

    /**
     * Restore persisted session.
     */
    restoreSession():
        LoginResponse | null {

        const stored =
            localStorage.getItem(
                AUTH_STORAGE_KEY,
            );

        if (!stored) {

            return null;

        }

        return JSON.parse(
            stored,
        ) as LoginResponse;

    }

    /**
     * Clear persisted session.
     */
    clearSession(): void {

        localStorage.removeItem(
            AUTH_STORAGE_KEY,
        );

    }

}

export const authService =
    new AuthService();