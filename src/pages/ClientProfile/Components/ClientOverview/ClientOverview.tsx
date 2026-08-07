import "./ClientOverview.css";

import { Stack } from "../../../../components/Layout/Stack";
import { HStack } from "../../../../components/Layout/HStack/Hstack";

import type {
    ClientOverviewProps,
} from "./ClientOverview.types";
import { ReactNode } from "react";
import { Building2, CalendarDays, Clock3, Globe, Link, Mail, Phone } from "lucide-react";
import { Grid } from "../../../../components/Layout/Grid";

export function ClientOverview({

    client,

}: ClientOverviewProps) {

    return (


        <Grid columns={2} spacing="lg">

            <OverviewItem
                icon={<Mail size={18} />}
                label="Email"
                value={client.email}
            />

            <OverviewItem
                icon={<Phone size={18} />}
                label="Phone"
                value={client.phone || "-"}
            />

            <OverviewItem
                icon={<Globe size={18} />}
                label="Country"
                value={client.country}
            />

            <OverviewItem
                icon={<Link size={18} />}
                label="Website"
                value={client.website || "-"}
            />

            <OverviewItem
                icon={<Building2 size={18} />}
                label="Type"
                value={client.type}
            />

            <OverviewItem
                icon={<CalendarDays size={18} />}
                label="Created"
                value={"Jan 10, 2026"}
/>

            <OverviewItem
                icon={<Clock3 size={18} />}
                label="Updated"
                value={"Feb 10, 2026"}
/>

        </Grid>


    );

}

interface OverviewItemProps {

    icon: ReactNode;

    label: string;

    value: string;

}

function OverviewItem({

    icon,

    label,

    value,

}: OverviewItemProps) {

    return (

        <HStack
            justify="space-between"
            align="center"
        >

            <HStack spacing="md">

                <div className="fo-client-overview__icon">

                    {icon}

                </div>

                <Stack spacing="xs">

                    <span className="fo-client-overview__label">

                        {label}

                    </span>

                    <strong>

                        {value}

                    </strong>

                </Stack>

            </HStack>

        </HStack>

    );

}