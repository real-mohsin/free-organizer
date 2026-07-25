import "./ClientsFilters.css";

import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import { Stack } from "../../../../components/Layout/Stack";

import type {
    ClientsFiltersProps,
} from "./ClientsFilters.types";

const STATUS_OPTIONS = [

    {
        label: "All Status",
        value: "all",
    },

    {
        label: "Active",
        value: "active",
    },

    {
        label: "Inactive",
        value: "inactive",
    },

    {
        label: "Archived",
        value: "archived",
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
        label: "Name (A-Z)",
        value: "name-asc",
    },

    {
        label: "Name (Z-A)",
        value: "name-desc",
    },

];

export function ClientsFilters({

    search,

    status,

    sort,

    onSearchChange,

    onStatusChange,

    onSortChange,

}: ClientsFiltersProps) {

    return (

        <div className="fo-clients-filters">

            <div className="fo-clients-filters__search">

                <Input
                    value={search}
                    placeholder="Search clients..."
                    onChange={(event) =>
                        onSearchChange(event.target.value)
                    }
                />

            </div>

            <Stack
                direction="row"
                spacing="md"
                className="fo-clients-filters__controls"
            >

                <Select
                    value={status}
                    options={STATUS_OPTIONS}
                    onChange={(event) =>
                        onStatusChange(event.target.value)
                    }
                />

                <Select
                    value={sort}
                    options={SORT_OPTIONS}
                    onChange={(event) => {
                        onSortChange(event.target.value);
                    }}
                />

            </Stack>

        </div>

    );

}