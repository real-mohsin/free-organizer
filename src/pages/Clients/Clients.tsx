import "./Clients.css";

import { useMemo, useState } from "react";

import { Container } from "../../components/Layout/Container";

import { mockClients } from "./data/mockClients";

import { ClientsHeader } from "./Components/ClientHeader/";
import { ClientsFilters } from "./Components/ClientsFilters";
import { ClientsTable } from "./Components/ClientsTable/ClientsTable";
import { ClientsStats } from "./Components/ClientsStats/ClientsStats";
import { EmptyState } from "../../components/EmptyState";
import { FolderOpen } from "lucide-react";
import { Button } from "../../components/Button";

export function Clients() {


    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("all");

    const [sort, setSort] = useState("newest");

    const filteredClients = useMemo(() => {

        let filtered = [...mockClients];

        /**
         * Search
         */
        if (search.trim()) {

            const query = search.toLowerCase();

            filtered = filtered.filter((client) =>

                client.name.toLowerCase().includes(query) ||

                client.company?.toLowerCase().includes(query) ||

                client.email.toLowerCase().includes(query)

            );

        }

        /**
         * Status Filter
         */
        if (status !== "all") {

            filtered = filtered.filter(

                (client) => client.status === status,

            );

        }

        /**
         * Sorting
         */
        switch (sort) {

            case "oldest":

                filtered.sort(

                    (a, b) =>

                        new Date(a.createdAt).getTime() -

                        new Date(b.createdAt).getTime(),

                );

                break;

            case "name-asc":

                filtered.sort((a, b) =>

                    a.name.localeCompare(b.name),

                );

                break;

            case "name-desc":

                filtered.sort((a, b) =>

                    b.name.localeCompare(a.name),

                );

                break;

            case "newest":

            default:

                filtered.sort(

                    (a, b) =>

                        new Date(b.createdAt).getTime() -

                        new Date(a.createdAt).getTime(),

                );

        }

        return filtered;

    }, [

        search,

        status,

        sort,

    ]);

    return (

        <Container>

            <ClientsHeader />

            <ClientsStats
                clients={filteredClients}
            />

            <ClientsFilters

                search={search}

                status={status}

                sort={sort}

                onSearchChange={setSearch}

                onStatusChange={setStatus}

                onSortChange={setSort}

            />

            <ClientsTable

                clients={filteredClients}

                emptyState={

                    <EmptyState

                        visual={<FolderOpen size={64} />}

                        heading="No clients found"

                        description="Try adjusting your search or filters."

                        actions={

                            <Button>

                                Add Client

                            </Button>

                        }

                    />

                }

                onView={(client) => console.log(client)}

                onEdit={(client) => console.log(client)}

                onDelete={(client) => console.log(client)}

            />
        </Container>

    );

}