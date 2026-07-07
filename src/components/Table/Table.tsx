import "./Table.css";

import { cn } from "../../utils/cn";

import { TableProps } from "./Table.types";

export function Table<T>({
    columns,
    data,
    emptyMessage = "No data available.",
    loading = false,
    zebra = false,
    hoverable = true,
    stickyHeader = false,
    fullWidth = true,
    getRowKey,
    className,
    ...props
}: TableProps<T>) {

    const classes = cn(
        "fo-table",
        {
            "fo-table--zebra": zebra,
            "fo-table--hover": hoverable,
            "fo-table--sticky": stickyHeader,
            "fo-table--full": fullWidth,
        },
        className
    );

    const renderBody = () => {

        if (loading) {
            return (
                <tr>
                    <td
                        className="fo-table__empty"
                        colSpan={columns.length}
                    >
                        Loading...
                    </td>
                </tr>
            );
        }

        if (data.length === 0) {
            return (
                <tr>
                    <td
                        className="fo-table__empty"
                        colSpan={columns.length}
                    >
                        {emptyMessage}
                    </td>
                </tr>
            );
        }

        return data.map((row, rowIndex) => {

            const rowKey = getRowKey
                ? getRowKey(row, rowIndex)
                : rowIndex;

            return (
                <tr
                    key={rowKey}
                    className="fo-table__row"
                >
                    {columns.map((column) => {

                        const value =
                            row[column.key as keyof T];

                        return (
                            <td
                                key={String(column.key)}
                                className={cn(
                                    "fo-table__cell",
                                    column.align &&
                                        `fo-table__cell--${column.align}`
                                )}
                            >
                                {column.render
                                    ? column.render(
                                          value,
                                          row,
                                          rowIndex
                                      )
                                    : String(value ?? "")}
                            </td>
                        );

                    })}
                </tr>
            );

        });

    };

    return (
        <div
            className={classes}
            {...props}
        >
            <table className="fo-table__table">

                <thead className="fo-table__head">
                    <tr className="fo-table__row">

                        {columns.map((column) => (
                            <th
                                key={String(column.key)}
                                className={cn(
                                    "fo-table__header",
                                    column.align &&
                                        `fo-table__header--${column.align}`
                                )}
                                style={{
                                    width: column.width,
                                }}
                            >
                                {column.title}
                            </th>
                        ))}

                    </tr>
                </thead>

                <tbody className="fo-table__body">
                    {renderBody()}
                </tbody>

            </table>
        </div>
    );
}