import "./ProjectsFilters.css";

import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import { Stack } from "../../../../components/Layout/Stack";

import type {

    ProjectsFiltersProps,

} from "./ProjectsFilters.types";
import { PROJECT_STATUS_OPTIONS } from "../../constants/project.constants";

const STATUS_OPTIONS = [

    {

        label: "All Status",

        value: "all",

    },

    ...PROJECT_STATUS_OPTIONS,

];

const CLIENT_OPTIONS = [

    {

        label: "All Clients",

        value: "all",

    },

    {

        label: "Sarah Johnson",

        value: "client-001",

    },

    {

        label: "Michael Brown",

        value: "client-002",

    },

    {

        label: "Emily Davis",

        value: "client-003",

    },

];

const SORT_OPTIONS = [

    {

        label: "Newest First",

        value: "newest",

    },

    {

        label: "Oldest First",

        value: "oldest",

    },

    {

        label: "Due Date",

        value: "due-date",

    },

    {

        label: "Budget",

        value: "budget",

    },

    {

        label: "Progress",

        value: "progress",

    },

];

export function ProjectsFilters({

    search,

    status,

    client,

    sort,

    onSearchChange,

    onStatusChange,

    onClientChange,

    onSortChange,

}: ProjectsFiltersProps) {

    return (

        <div className="fo-projects-filters">

            <div className="fo-projects-filters__search">

                <Input

                    value={search}

                    placeholder="Search projects..."

                    onChange={(event) =>

                        onSearchChange(

                            event.target.value,

                        )

                    }

                />

            </div>

            <Stack

                direction="row"

                spacing="md"

                className="fo-projects-filters__controls"

            >

                <Select

                    value={status}

                    options={STATUS_OPTIONS}

                    onChange={(event) =>

                        onStatusChange(

                            event.target.value,

                        )

                    }

                />

                <Select

                    value={client}

                    options={CLIENT_OPTIONS}

                    onChange={(event) =>

                        onClientChange(

                            event.target.value,

                        )

                    }

                />

                <Select

                    value={sort}

                    options={SORT_OPTIONS}

                    onChange={(event) =>

                        onSortChange(

                            event.target.value,

                        )

                    }

                />

            </Stack>

        </div>

    );

}