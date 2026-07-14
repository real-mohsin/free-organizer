/**
 * Login request payload.
 */
export interface LoginRequest {

    email: string;

    password: string;

    rememberMe: boolean;

}

/**
 * Authenticated user.
 */
export interface AuthenticatedUser {

    id: string;

    name: string;

    email: string;

}

/**
 * Login response.
 */
export interface LoginResponse {

    accessToken: string;

    refreshToken?: string;

    user: AuthenticatedUser;

}