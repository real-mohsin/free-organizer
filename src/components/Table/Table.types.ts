import {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * Defines a single table column.
 */
export interface TableColumn<T> {
    /**
     * Unique column identifier.
     */
    key: keyof T | string;

    /**
     * Header content.
     */
    title: ReactNode;

    /**
     * Custom cell renderer.
     */
    render?: (
        value: unknown,
        row: T,
        rowIndex: number
    ) => ReactNode;

    /**
     * Text alignment.
     */
    align?: "left" | "center" | "right";

    /**
     * Optional fixed width.
     */
    width?: number | string;
}

/**
 * Table component props.
 */
export interface TableProps<T>
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Column definitions.
     */
    columns: TableColumn<T>[];

    /**
     * Data source.
     */
    data: T[];

    /**
     * Empty state message.
     */
    emptyMessage?: ReactNode;

    /**
     * Loading state.
     */
    loading?: boolean;

    /**
     * Show zebra rows.
     */
    zebra?: boolean;

    /**
     * Enable hover effect.
     */
    hoverable?: boolean;

    /**
     * Sticky table header.
     */
    stickyHeader?: boolean;

    /**
     * Full width table.
     */
    fullWidth?: boolean;

    getRowKey?: (
    row: T,
    rowIndex: number
) => React.Key;
}