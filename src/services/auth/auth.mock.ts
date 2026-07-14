import {
    AUTH_MOCK_DELAY,
} from "./auth.constants";

import type {
    AuthenticatedUser,
    LoginRequest,
    LoginResponse,
} from "./auth.types";


/**
 * Mock user.
 */
const MOCK_USER: AuthenticatedUser = {

    id: "1",

    name: "Mohsin Rasheed",

    email: "admin@freeorganizer.app",

};

/**
* Mock Access Token
*/

const MOCK_ACCESS_TOKEN =
    "mock-access-token";

const MOCK_REFRESH_TOKEN =
    "mock-refresh-token";

/**
 * Mock credentials.
 */
const MOCK_CREDENTIALS = {

    email: "admin@freeorganizer.app",

    password: "Password123",

} as const;

/**
 * Simulates authentication.
 */
export async function mockLogin(
    request: LoginRequest,
): Promise<LoginResponse> {

    await new Promise((resolve) =>
        setTimeout(
            resolve,
            AUTH_MOCK_DELAY,
        ),
    );

    const isValid =
        request.email === MOCK_CREDENTIALS.email &&
        request.password === MOCK_CREDENTIALS.password;

    if (!isValid) {

        throw new Error(
            "Invalid email or password.",
        );

    }



    return {

        accessToken: MOCK_ACCESS_TOKEN,

        refreshToken: MOCK_REFRESH_TOKEN,

        user: MOCK_USER,

    };

}