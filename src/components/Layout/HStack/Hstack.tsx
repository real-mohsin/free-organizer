import { Stack, StackProps } from "../Stack";

export function HStack(props: StackProps) {
    return (
        <Stack
            {...props}
            direction="row"
        />
    );
}