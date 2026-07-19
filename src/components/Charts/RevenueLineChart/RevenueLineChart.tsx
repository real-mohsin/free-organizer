import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import { ChartContainer } from "../ChartContainer";

import {
    CHART_COLORS,
    CHART_CONFIG,
} from "../chart.constants";

import type {
    RevenueLineChartProps,
} from "./RevenueLineChart.types";
import { ChartTooltip } from "../ChartTooltip/ChartTooltip";

export function RevenueLineChart({
    data,
}: RevenueLineChartProps) {

    return (

        <ChartContainer>

            <ResponsiveContainer
                width="100%"
                height="100%"
            >

                <LineChart
                    data={data}
                    margin={{
                        top: 8,
                        right: 16,
                        left: 0,
                        bottom: 0,
                    }}
                >

                    <CartesianGrid
                        stroke={CHART_COLORS.GRID}
                        strokeDasharray={
                            CHART_CONFIG.GRID_DASH_ARRAY
                        }
                    />

                    <XAxis
                        dataKey="label"
                        stroke={CHART_COLORS.AXIS}
                        tickLine={false}
                        axisLine={false}
                    />

                    <YAxis
                        stroke={CHART_COLORS.AXIS}
                        tickLine={false}
                        axisLine={false}
                    />

                    <Tooltip
                        cursor={{
                            stroke: CHART_COLORS.GRID,
                        }}
                        content={<ChartTooltip />}
                    />

                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke={CHART_COLORS.REVENUE}
                        strokeWidth={
                            CHART_CONFIG.STROKE_WIDTH
                        }
                        dot={false}
                        activeDot={{
                            r: CHART_CONFIG.ACTIVE_DOT_RADIUS,
                        }}
                        animationDuration={
                            CHART_CONFIG.ANIMATION_DURATION
                        }
                    />

                </LineChart>

            </ResponsiveContainer>

        </ChartContainer>

    );

}