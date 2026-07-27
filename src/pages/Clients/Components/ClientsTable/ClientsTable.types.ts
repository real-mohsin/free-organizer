import { ReactNode } from "react";
import type {
    Client,
} from "../../../../models/Client.models";

export interface ClientsTableProps {

    /**
     * Clients to display.
     */
    clients: Client[];

    /**
     * Empty state component
     */
    emptyState?: ReactNode;

    /**
     * View client.
     */
    onView?(
        client: Client,
    ): void;

    /**
     * Edit client.
     */
    onEdit?(
        client: Client,
    ): void;

    /**
     * Delete client.
     */
    onDelete?(
        client: Client,
    ): void;

}