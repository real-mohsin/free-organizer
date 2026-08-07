import "./Projects.css";

import { useState } from "react";

import { Container } from "../../components/Layout/Container";

import { ProjectsHeader } from "./Components/ProjectsHeader";
import { ProjectsStats } from "./Components/ProjectsStats";
import { ProjectsFilters } from "./Components/ProjectsFilters";
import { ProjectsTable } from "./Components/ProjectsTable";
import { mockProjects } from "./data/ mockProjects";



export function Projects() {

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("all");

    const [client, setClient] = useState("all");

    const [sort, setSort] = useState("newest");

    return (

        <Container>

            <ProjectsHeader />

            <ProjectsStats
                projects={mockProjects}
            />

            <ProjectsFilters

                search={search}

                status={status}

                client={client}

                sort={sort}

                onSearchChange={setSearch}

                onStatusChange={setStatus}

                onClientChange={setClient}

                onSortChange={setSort}

            />

            <ProjectsTable

                projects={mockProjects}

                onView={(project) =>

                    console.log("View", project)

                }

                onEdit={(project) =>

                    console.log("Edit", project)

                }

                onDelete={(project) =>

                    console.log("Delete", project)

                }

            />

        </Container>

    );

}