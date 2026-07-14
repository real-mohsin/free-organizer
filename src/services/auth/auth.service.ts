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

}

export const authService =
    new AuthService();