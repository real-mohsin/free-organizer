/**
 * Combines class names into a single string.
 *
 * Supports:
 * - strings
 * - undefined
 * - null
 * - false
 * - arrays (nested)
 * - object syntax ({ className: condition })
 *
 * Examples:
 *
 * cn("btn", "btn-primary")
 * => "btn btn-primary"
 *
 * cn("btn", isActive && "active")
 * => "btn active"
 *
 * cn("btn", {
 *   active: isActive,
 *   disabled: isDisabled,
 * })
 *
 * => "btn active"
 *
 * cn([
 *   "btn",
 *   "btn-primary",
 *   isLoading && "loading",
 * ])
 *
 * => "btn btn-primary loading"
 */

export type ClassDictionary = Record<
    string,
    string | number | boolean | null | undefined
>;

export type ClassValue =
    | string
    | number
    | boolean
    | null
    | undefined
    | ClassDictionary
    | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
    const classes: string[] = [];

    const process = (value: ClassValue): void => {
        if (!value) {
            return;
        }

        if (typeof value === "string" || typeof value === "number") {
            classes.push(String(value));
            return;
        }

        if (Array.isArray(value)) {
            value.forEach(process);
            return;
        }

        if (typeof value === "object") {
            Object.entries(value).forEach(([key, enabled]) => {
                if (enabled) {
                    classes.push(key);
                }
            });
        }
    };

    inputs.forEach(process);

    return classes.join(" ");
}