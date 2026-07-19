/**
 * Shared chart configuration.
 */
export const CHART_CONFIG = {

    /**
     * Default line stroke width.
     */
    STROKE_WIDTH: 3,

    /**
     * Radius of the active data point.
     */
    ACTIVE_DOT_RADIUS: 5,

    /**
     * Grid dash pattern.
     */
    GRID_DASH_ARRAY: "4 4",

    /**
     * Default chart animation duration.
     */
    ANIMATION_DURATION: 500,

} as const;

/**
 * Shared chart color palette.
 */
export const CHART_COLORS = {

    /**
     * Primary brand color.
     */
    PRIMARY: "#4F46E5",

    /**
     * Revenue series.
     */
    REVENUE: "#4F46E5",

    /**
     * Success state.
     */
    SUCCESS: "#16A34A",

    /**
     * Warning state.
     */
    WARNING: "#F59E0B",

    /**
     * Error / danger state.
     */
    DANGER: "#DC2626",

    /**
     * Grid lines.
     */
    GRID: "#E5E7EB",

    /**
     * Axis labels and ticks.
     */
    AXIS: "#6B7280",

} as const;