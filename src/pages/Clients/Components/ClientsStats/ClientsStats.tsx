import "./ClientsStats.css";

import {

    Users,

    UserCheck,

    FolderKanban,

    DollarSign,

} from "lucide-react";

import { Grid } from "../../../../components/Layout/Grid";
import { StatCard } from "../../../../components/DataDisplay/StatCard";

import type {

    ClientsStatsProps,

} from "./ClientsStats.types";

export function ClientsStats({

    clients,

}: ClientsStatsProps) {

    const totalClients = clients.length;

    const activeClients = clients.filter(

        (client) => client.status === "active",

    ).length;

    const totalProjects = clients.reduce(

        (total, client) => total + client.projects,

        0,

    );

    const totalRevenue = clients.reduce(

        (total, client) => total + client.totalRevenue,

        0,

    );

    return (

        <Grid
            columns={4}
            spacing="lg"
            className="fo-clients-stats"
        >

            <StatCard

                heading="Total Clients"

                value={totalClients}

                icon={<Users size={20} />}

            />

            <StatCard

                heading="Active Clients"

                value={activeClients}

                icon={<UserCheck size={20} />}

                variant="revenue"

            />

            <StatCard

                heading="Projects"

                value={totalProjects}

                icon={<FolderKanban size={20} />}

                variant="clients"

            />

            <StatCard

                heading="Revenue"

                value={`$${totalRevenue.toLocaleString()}`}

                icon={<DollarSign size={20} />}

                variant="outstanding"

            />

        </Grid>

    );

}