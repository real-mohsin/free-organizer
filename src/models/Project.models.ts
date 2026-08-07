/**
 * Project lifecycle status.
 */
export type ProjectStatus =
    | "planning"
    | "active"
    | "on-hold"
    | "completed"
    | "cancelled";

/**
 * Supported currencies.
 * (Can be expanded later.)
 */
export type ProjectCurrency =
    | "USD"
    | "EUR"
    | "GBP"
    | "PKR";

/**
 * Project model.
 */
export interface Project {

    /**
     * Unique identifier.
     */
    id: string;

    /**
     * Related client.
     */
    clientId: string;

    /**
     * Project name.
     */
    name: string;

    /**
     * Optional description.
     */
    description?: string;

    /**
     * Current project status.
     */
    status: ProjectStatus;

    /**
     * Budget.
     */
    budget: number;

    /**
     * Amount already paid.
     */
    paidAmount: number;

    /**
     * Project currency.
     */
    currency: ProjectCurrency;

    /**
     * Completion percentage.
     */
    progress: number;

    /**
     * Project start date.
     */
    startDate: string;

    /**
     * Expected completion date.
     */
    dueDate: string;

    /**
     * Audit fields.
     */
    createdAt: string;

    updatedAt: string;

}