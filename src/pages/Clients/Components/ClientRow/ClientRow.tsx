import "./ClientRow.css";

import {
    Edit2,
    Eye,
    Trash2,
} from "lucide-react";

import {
    Avatar,
} from "../../../../components/Avatar";

import {
    Badge,
} from "../../../../components/Badge";

import {
    IconButton,
} from "../../../../components/IconButton";
import { ClientRowProps } from "./ClientRow.types";

export function ClientRow({

    client,

    onView,

    onEdit,

    onDelete,

}: ClientRowProps) {

    return (

        <tr className="fo-client-row">

            <td>

                <Avatar

                    src={client.avatar}

                    alt={client.name}

                    name={client.name}

                />

            </td>

            <td>

                {client.name}

            </td>

            <td>

                {client.company}

            </td>

            <td>

                {client.email}

            </td>

            <td>

                {client.country}

            </td>

            <td>

                {client.projects}

            </td>

            <td>

                <Badge
                    variant={
                        client.status === "active"
                            ? "success"
                            : client.status === "inactive"
                                ? "warning"
                                : "default"
                    }
                >

                    {client.status}

                </Badge>

            </td>

            <td>

                <div className="fo-client-row__actions">

                    <IconButton
                        variant="ghost"
                        aria-label="View Client"
                        onClick={() => onView?.(client)}
                    >

                        <Eye size={16} />

                    </IconButton>

                    <IconButton
                        variant="ghost"
                        aria-label="Edit Client"
                        onClick={() => onEdit?.(client)}
                    >

                        <Edit2 size={16} />

                    </IconButton>

                    <IconButton
                        variant="ghost"
                        aria-label="Delete Client"
                        onClick={() => onDelete?.(client)}
                    >

                        <Trash2 size={16} />

                    </IconButton>

                </div>

            </td>

        </tr>

    );

}