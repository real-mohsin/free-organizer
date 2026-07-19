/**
 * A single revenue data point.
 */
export interface RevenueDataPoint {

    /**
     * X-axis label.
     *
     * Example:
     * Jan
     * Feb
     * Mar
     */
    label: string;

    /**
     * Revenue value.
     */
    value: number;

}

/**
 * Props for the RevenueLineChart component.
 */
export interface RevenueLineChartProps {

    /**
     * Revenue data.
     */
    data: RevenueDataPoint[];

}