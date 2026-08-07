import "./ProjectsStats.css";

import {

    CheckCircle2,
    DollarSign,
    FolderKanban,
    Wallet,

} from "lucide-react";

import { Grid } from "../../../../components/Layout/Grid";
import { StatCard } from "../../../../components/DataDisplay/StatCard";

import type {
    ProjectsStatsProps,
} from "./ProjectsStats.types";

export function ProjectsStats({

    projects,

}: ProjectsStatsProps) {

    const activeProjects = projects.filter(

        (project) => project.status === "active",

    ).length;

    const completedProjects = projects.filter(

        (project) => project.status === "completed",

    ).length;

    const totalBudget = projects.reduce(

        (total, project) => total + project.budget,

        0,

    );

    const outstanding = projects.reduce(

        (total, project) =>

            total +

            (project.budget - project.paidAmount),

        0,

    );

    return (

        <Grid
            columns={4}
            spacing="lg"
            className="fo-projects-stats"
        >

            <StatCard

                heading="Active Projects"

                value={activeProjects}

                icon={<FolderKanban size={20} />}

                variant="primary"

            />

            <StatCard

                heading="Completed"

                value={completedProjects}

                icon={<CheckCircle2 size={20} />}

                variant="success"

            />

            <StatCard

                heading="Budget"

                value={`$${totalBudget.toLocaleString()}`}

                icon={<Wallet size={20} />}

                variant="purple"

            />

            <StatCard

                heading="Outstanding"

                value={`$${outstanding.toLocaleString()}`}

                icon={<DollarSign size={20} />}

                variant="warning"

            />

        </Grid>

    );

}