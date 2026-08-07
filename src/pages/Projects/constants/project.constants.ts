import type {
    ProjectStatus,
    ProjectCurrency,
} from "../../../models/Project.models";

/**
 * Project status options.
 */
export const PROJECT_STATUS_OPTIONS: {
    label: string;
    value: ProjectStatus;
}[] = [

    {
        label: "Planning",
        value: "planning",
    },

    {
        label: "Active",
        value: "active",
    },

    {
        label: "On Hold",
        value: "on-hold",
    },

    {
        label: "Completed",
        value: "completed",
    },

    {
        label: "Cancelled",
        value: "cancelled",
    },

];

/**
 * Supported currencies.
 */
export const PROJECT_CURRENCY_OPTIONS: {
    label: string;
    value: ProjectCurrency;
}[] = [

    {
        label: "US Dollar (USD)",
        value: "USD",
    },

    {
        label: "Euro (EUR)",
        value: "EUR",
    },

    {
        label: "British Pound (GBP)",
        value: "GBP",
    },

    {
        label: "Pakistani Rupee (PKR)",
        value: "PKR",
    },

];