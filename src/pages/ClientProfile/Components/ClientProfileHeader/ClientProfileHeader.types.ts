import type {
    Client,
} from "../../../../models/Client.models";

export interface ClientProfileHeaderProps {

    /**
     * Current client.
     */
    client: Client;

    /**
     * Back button.
     */
    onBack?: () => void;

    /**
     * Edit action.
     */
    onEdit?: () => void;

}