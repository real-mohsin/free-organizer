export interface ProjectsFiltersProps {

    search: string;

    status: string;

    client: string;

    sort: string;

    onSearchChange: (
        value: string,
    ) => void;

    onStatusChange: (
        value: string,
    ) => void;

    onClientChange: (
        value: string,
    ) => void;

    onSortChange: (
        value: string,
    ) => void;

}