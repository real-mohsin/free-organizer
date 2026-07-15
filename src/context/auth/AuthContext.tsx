import {
    createContext,
} from "react";

import type {
    AuthContextValue,
} from "./Auth.types";

export const AuthContext =
    createContext<AuthContextValue | null>(
        null,
    );