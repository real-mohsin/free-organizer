import type {
    FormHTMLAttributes,
} from "react";

import type {
    Client,
    ClientStatus,
} from "../../../../models/Client.models";

/**
 * Client form values.
 */
export interface ClientFormValues {

    /**
     * Client name.
     */
    name: string;

    /**
     * Company name.
     */
    company: string;

    /**
     * Email address.
     */
    email: string;

    /**
     * Phone number.
     */
    phone: string;

    /**
     * Country.
     */
    country: string;

    /**
     * Client status.
     */
    status: ClientStatus;

    /**
     * Optional notes.
     */
    notes: string;

}

/**
 * Validation errors.
 */
export interface ClientFormErrors {

    name?: string;

    email?: string;

    phone?: string;

    country?: string;

    company?: string;

    status?: string;

    notes?: string;

}

/**
 * Client form props.
 */
export interface ClientFormProps
    extends Omit<
        FormHTMLAttributes<HTMLFormElement>,
        "onChange" | "onSubmit"
    > {

    /**
     * Current form values.
     */
    values: ClientFormValues;

    /**
     * Validation errors.
     */
    errors?: ClientFormErrors;

    /**
     * Updates a single field.
     */
    onChange: <
        K extends keyof ClientFormValues
    >(
        field: K,
        value: ClientFormValues[K],
    ) => void;

    /**
     * Form submit handler.
     */
    onSubmit: () => void;

}