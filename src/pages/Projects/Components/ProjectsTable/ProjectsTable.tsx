import { Eye, Pencil, Trash2 } from "lucide-react";

import { Badge } from "../../../../components/Badge";
import { IconButton } from "../../../../components/IconButton";
import { HStack } from "../../../../components/Layout/HStack/Hstack";
import { Table } from "../../../../components/Table";

import type {
    TableColumn,
} from "../../../../components/Table/Table.types";

import type {
    Project,
} from "../../../../models/Project.models";

import type {
    ProjectsTableProps,
} from "./ProjectsTable.types";

export function ProjectsTable({

    projects,

    onView,

    onEdit,

    onDelete,

}: ProjectsTableProps) {

    const columns: TableColumn<Project>[] = [

        {
            key: "name",
            title: "Project",
        },

        {
            key: "clientName",
            title: "Client",
        },

        {
            key: "status",
            title: "Status",

            render: (_, project) => (

                <Badge>

                    {project.status}

                </Badge>

            ),

        },

        {
            key: "progress",
            title: "Progress",

            render: (_, project) => (

                `${project.progress}%`

            ),

        },

        {
            key: "budget",
            title: "Budget",

            align: "right",

            render: (_, project) =>

                `$${project.budget.toLocaleString()}`,

        },

        {
            key: "dueDate",
            title: "Due Date",

            render: (_, project) =>

                new Date(
                    project.dueDate,
                ).toLocaleDateString(),

        },

        {
            key: "actions",
            title: "",

            align: "center",

            width: 140,

            render: (_, project) => (

                <HStack
                    spacing="sm"
                    justify="center"
                >

                    <IconButton

                        aria-label="View Project"

                        onClick={(event) => {

                            event.stopPropagation();

                            onView?.(project);

                        }}

                    >

                        <Eye size={18} />

                    </IconButton>

                    <IconButton

                        aria-label="Edit Project"

                        onClick={(event) => {

                            event.stopPropagation();

                            onEdit?.(project);

                        }}

                    >

                        <Pencil size={18} />

                    </IconButton>

                    <IconButton

                        aria-label="Delete Project"

                        variant="danger"

                        aria-describedby={undefined}

                        onClick={(event) => {

                            event.stopPropagation();

                            onDelete?.(project);

                        }}

                    >

                        <Trash2 size={18} />

                    </IconButton>

                </HStack>

            ),

        },

    ];

    return (

        <Table

            columns={columns}

            data={projects}

            zebra

            hoverable

            stickyHeader

            getRowKey={(project) => project.id}

            onRowClick={(project) =>

                onView?.(project)

            }

        />

    );

}