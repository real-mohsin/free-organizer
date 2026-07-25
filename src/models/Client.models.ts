/**
 * Client lifecycle status.
 */
export type ClientStatus =
    | "active"
    | "inactive"
    | "archived";

/**
 * Client category.
 */
export type ClientType =
    | "individual"
    | "business";

/**
 * Client model.
 */
export interface Client {

    id: string;

    name: string;

    company?: string;

    email: string;

    phone?: string;

    avatar?: string;

    country: string;

    city?: string;

    website?: string;

    notes?: string;

    type: ClientType;

    status: ClientStatus;

    projects: number;

    totalRevenue: number;

    createdAt: string;

    updatedAt: string;

}