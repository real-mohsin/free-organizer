import "./Dashboard.css";

import { Button } from "../../components/Button";
import { Grid } from "../../components/Layout/Grid";
import { Stack } from "../../components/Layout/Stack";

import { PageHero } from "../../components/PageHero";
import { PageHeader } from "../../components/PageHeader";

import { StatCard } from "../../components/DataDisplay/StatCard";
import { ChartCard } from "../../components/DataDisplay/ChartCard";
import { TableCard } from "../../components/DataDisplay/TableCard";

import { RevenueLineChart } from "../../components/Charts/RevenueLineChart";
import { Table } from "../../components/Table";

import {
    DASHBOARD_STATS,
    REVENUE_DATA,
    RECENT_CLIENTS,
} from "./Dashboard.constants";

import {
    dummyClients,
} from "../dummyClients";

import type {
    DashboardProps,
} from "./Dashboard.types";

import { Plus } from "lucide-react";
import { clientColumns } from "../columns";
import { cn } from "../../utils/cn";

export function Dashboard({
    className,
    ...props
}: DashboardProps) {

    return (
        <div
            className={cn(
                "fo-dashboard",
                className,
            )}
            {...props}
        >

            <Stack spacing="xl">

                <PageHero>

                    <PageHeader
                        heading="👋 Good Afternoon, Mohsin"
                        subtitle="Welcome back! Here's an overview of your freelance business."
                        actions={

                            <Button
                                leftIcon={<Plus size={18} />}
                            >

                                New Client

                            </Button>

                        }
                    />

                </PageHero>

                <Grid
                    columns={4}
                    spacing="xl"
                >

                    {DASHBOARD_STATS.map((stat) => {

                        const Icon = stat.icon;

                        return (

                            <StatCard
                                key={stat.heading}
                                heading={stat.heading}
                                value={stat.value}
                                footer={stat.footer}
                                icon={<Icon size={20} />}
                                variant={stat.variant}
                            />

                        );

                    })}

                </Grid>

                <Grid
                    columns={2}
                    spacing="lg"
                >

                    <ChartCard
                        heading="Revenue Trend"
                        subtitle="Last 12 Months"
                    >

                        <RevenueLineChart
                            data={REVENUE_DATA}
                        />

                    </ChartCard>

                    <ChartCard
                        heading="Monthly Summary"
                        subtitle="Coming Soon"
                    >

                        <div className="fo-dashboard__placeholder">

                            More analytics will appear here.

                        </div>

                    </ChartCard>

                </Grid>

                <TableCard
                    heading="Recent Clients"
                    subtitle="Your latest client activity"
                >

                    <Table
                        columns={clientColumns}
                        data={dummyClients.slice(0, 5)}
                    />

                </TableCard>

            </Stack>

        </div>
    );

}