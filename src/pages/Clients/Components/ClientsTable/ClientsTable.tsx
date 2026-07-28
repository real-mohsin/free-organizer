import "./ClientsTable.css";

import {
    Eye,
    Pencil,
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

import {
    Stack,
} from "../../../../components/Layout/Stack";

import {
    Table,
} from "../../../../components/Table";

import type {
    TableColumn,
} from "../../../../components/Table/Table.types";

import type {
    Client,
} from "../../../../models/Client.models";

import type {
    ClientsTableProps,
} from "./ClientsTable.types";

export function ClientsTable({

    clients,

    emptyState,

    onView,

    onEdit,

    onDelete,

}: ClientsTableProps) {

    const columns: TableColumn<Client>[] = [

        {
            key: "name",
            title: "Client",

            render: (_, client) => (

                <div className="fo-client-table__client">

                    <Avatar
                        src={client.avatar}
                        name={client.name}
                    />

                    <Stack spacing="xs">

                        <strong>{client.name}</strong>

                        <span>{client.company}</span>

                    </Stack>

                </div>

            ),

        },

        {
            key: "email",
            title: "Email",
        },

        {
            key: "country",
            title: "Country",
        },

        {
            key: "projects",
            title: "Projects",
            align: "center",
        },

        {
            key: "status",
            title: "Status",

            render: (_, client) => (

                <Badge
                    variant={
                        client.status === "active"
                            ? "primary"
                            : client.status === "inactive"
                                ? "warning"
                                : "default"
                    }
                >
                    {client.status}
                </Badge>

            ),

        },

        {
            key: "id",
            title: "Actions",
            align: "center",

            render: (_, client) => (

                <div className="fo-client-table__actions">

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

                        <Pencil size={16} />

                    </IconButton>

                    <IconButton
                        variant="ghost"
                        aria-label="Delete Client"
                        onClick={() => onDelete?.(client)}
                    >

                        <Trash2 size={16} />

                    </IconButton>

                </div>

            ),

        },

    ];

    return (

        <Table<Client>

            columns={columns}

            data={clients}

            emptyState={emptyState}

            zebra

            hoverable

            stickyHeader

            getRowKey={(client) => client.id}

        />

    );

}