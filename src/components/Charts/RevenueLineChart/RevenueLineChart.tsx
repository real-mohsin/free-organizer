import "./RevenueLineChart.css";

import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import {
    CHART_COLORS,
    CHART_CONFIG,
} from "../chart.constants";

import type {
    RevenueLineChartProps,
} from "./RevenueLineChart.types";

export function RevenueLineChart({
    data,
}: RevenueLineChartProps) {

    return (

        <div className="fo-revenue-line-chart">

            <ResponsiveContainer
                width="100%"
                height={300}
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

        </div>

    );

}

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
// } from "recharts";

// const data = [
//   { name: "Jan", value: 400 },
//   { name: "Feb", value: 300 },
//   { name: "Mar", value: 500 },
// ];

// export function RevenueLineChart() {
//   return (
//     <LineChart
//       width={500}
//       height={300}
//       data={data}
//     >
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Line
//         type="monotone"
//         dataKey="value"
//         stroke="#8884d8"
//       />
//     </LineChart>
//   );
// }