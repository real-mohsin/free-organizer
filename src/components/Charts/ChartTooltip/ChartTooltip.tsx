import "./ChartTooltip.css";

import type {
    ChartTooltipProps,
} from "./ChartTooltip.types";

export function ChartTooltip({
    active,
    payload,
    label,
}: ChartTooltipProps) {

    if (
        !active ||
        !payload ||
        payload.length === 0
    ) {

        return null;

    }

    return (

        <div className="fo-chart-tooltip">

            <div className="fo-chart-tooltip__header">

                {label}

            </div>

            <div className="fo-chart-tooltip__body">

                {payload.map((entry) => (

                    <div
                        key={String(entry.dataKey)}
                        className="fo-chart-tooltip__row"
                    >

                        <div
                            className="fo-chart-tooltip__series"
                        >

                            <span
                                className="fo-chart-tooltip__dot"
                                style={{
                                    backgroundColor:
                                        entry.color,
                                }}
                            />

                            <span
                                className="fo-chart-tooltip__name"
                            >

                                {entry.name ??
                                    entry.dataKey}

                            </span>

                        </div>

                        <span
                            className="fo-chart-tooltip__value"
                        >

                            {entry.value}

                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

}