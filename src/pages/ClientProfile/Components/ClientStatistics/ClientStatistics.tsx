import "./ClientStatistics.css";

import {
    FolderKanban,
    DollarSign,
    Calendar,
    Building2,
} from "lucide-react";

import { StatCard } from "../../../../components/DataDisplay/StatCard";
import { Grid } from "../../../../components/Layout/Grid";

import type {
    ClientStatisticsProps,
} from "./ClientStatistics.types";

export function ClientStatistics({

    client,

}: ClientStatisticsProps) {

    return (

        <Grid
            columns={4}
            spacing="lg"
            className="fo-client-statistics"
        >

            <StatCard
                variant="primary"
                heading="Projects"
                value={client.projects}
                icon={<FolderKanban size={18} />}
            />

            <StatCard
                variant="success"
                heading="Revenue"
                value={`$${client.totalRevenue.toLocaleString()}`}
                icon={<DollarSign size={18} />}
            />

            <StatCard
                variant="warning"
                heading="Type"
                value={client.type}
                icon={<Building2 size={18} />}
            />

            <StatCard
                variant="purple"
                heading="Client Since"
                value={new Date(
                    client.createdAt,
                ).getFullYear()}
                icon={<Calendar size={18} />}
            />

        </Grid>

    );

}