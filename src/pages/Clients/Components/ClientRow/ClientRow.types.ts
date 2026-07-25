import type {
    Client,
} from "../../../../models/Client.models";

export interface ClientRowProps {

    client: Client;

    onView?(
        client: Client,
    ): void;

    onEdit?(
        client: Client,
    ): void;

    onDelete?(
        client: Client,
    ): void;

}