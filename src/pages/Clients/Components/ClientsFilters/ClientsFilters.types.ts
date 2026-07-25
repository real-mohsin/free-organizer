export interface ClientsFiltersProps {

    search: string;

    status: string;

    sort: string;

    onSearchChange(value: string): void;

    onStatusChange(value: string): void;

    onSortChange(value: string): void;

}