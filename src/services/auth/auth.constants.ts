/**
 * Authentication storage key.
 */
export const AUTH_STORAGE_KEY =
    "free-organizer-auth";

/**
 * Authentication status.
 */
export const AUTH_STATUS = {

    AUTHENTICATED: "authenticated",

    UNAUTHENTICATED: "unauthenticated",

    LOADING: "loading",

} as const;

/**
 * Authentication endpoints.
 *
 * Mocked for now.
 * Will be replaced when backend is available.
 */
export const AUTH_ENDPOINTS = {

    LOGIN: "/auth/login",

    LOGOUT: "/auth/logout",

    REFRESH: "/auth/refresh",

} as const;

/**
 * Default mock network delay (milliseconds).
 */
export const AUTH_MOCK_DELAY = 1000;