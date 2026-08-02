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
import { Modal } from "../../components/Modal";
import { ClientForm } from "./Components/ClientForm/ClientForm";
import type {
    ClientFormValues,
    ClientFormErrors,
} from "./Components/ClientForm/ClientForm.types";

import { validateForm } from "../../utils/validation";
import { clientFormSchema } from "./Components/ClientForm/ClientForm.validation";
import { Client } from "../../models/Client.models";
import { useNotification } from "../../providers/Notification";

export function Clients() {

    const [clients, setClients] = useState(mockClients);

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("all");

    const [sort, setSort] = useState("newest");

    const filteredClients = useMemo(() => {

        let filtered = [...clients];

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
    const [isClientModalOpen, setIsClientModalOpen] =
        useState(false);

    const [editingClient, setEditingClient] =
        useState<Client | null>(null);

    const [isDeleteModalOpen, setIsDeleteModalOpen] =
        useState(false);

    const [clientToDelete, setClientToDelete] =
        useState<Client | null>(null);

    const notify = useNotification();

    const [clientForm, setClientForm] =
        useState<ClientFormValues>({


            name: "",

            company: "",

            email: "",

            phone: "",

            country: "",

            status: "active",

            notes: "",

        });

    const resetClientForm = () => {

        setClientForm({

            name: "",

            company: "",

            email: "",

            phone: "",

            country: "",

            status: "active",

            notes: "",

        });

        setClientFormErrors({});

    };

    const [clientFormErrors, setClientFormErrors] =
        useState<ClientFormErrors>({});

    const handleClientFormChange = <
        K extends keyof ClientFormValues
    >(
        field: K,
        value: ClientFormValues[K],
    ) => {

        setClientForm((current) => ({

            ...current,

            [field]: value,

        }));

        setClientFormErrors((current) => ({

            ...current,

            [field]: undefined,

        }));

    };

    const handleCreateClient = () => {

        const result =

            validateForm(

                clientFormSchema,

                clientForm,

            );
        console.log("Validation Result:", result);

        if (!result.success) {

            console.log("Errors:", result.errors);

            setClientFormErrors(result.errors);

            return;
        }

        const now = new Date().toISOString();

        const newClient: Client = {

            id: crypto.randomUUID(),

            name: result.data.name,

            company: result.data.company,

            email: result.data.email,

            phone: result.data.phone,

            country: result.data.country,

            notes: result.data.notes,

            status: result.data.status,

            avatar: "",

            city: "",

            website: "",

            type: "business",

            projects: 0,

            totalRevenue: 0,

            createdAt: now,

            updatedAt: now,

        };

        setClients((current) => [

            newClient,

            ...current,

        ]);

        closeClientModal();

        notify.notify({

            variant: "success",

            title: "Client Created",

            description: `${newClient.name} has been added successfully.`,

        });

    };

    const handleUpdateClient = () => {

        if (!editingClient) {

            return;

        }

        const result = validateForm(

            clientFormSchema,

            clientForm,

        );

        if (!result.success) {

            setClientFormErrors(result.errors);

            return;

        }

        const now = new Date().toISOString();

        const updatedClient: Client = {

            ...editingClient,

            name: result.data.name,

            company: result.data.company,

            email: result.data.email,

            phone: result.data.phone,

            country: result.data.country,

            notes: result.data.notes,

            status: result.data.status,

            updatedAt: now,

        };

        setClients((current) =>

            current.map((client) =>

                client.id === editingClient.id

                    ? updatedClient

                    : client,

            ),

        );

        notify.notify({

            variant: "success",

            title: "Client Updated",

            description: `${updatedClient.name} has been updated successfully.`,

        });

        closeClientModal();

    };

    const handleEditClient = (client: Client) => {
        setEditingClient(client);
        setClientForm({

            name: client.name,

            company: client.company ?? "",

            email: client.email,

            phone: client.phone ?? "",

            country: client.country,

            status: client.status,

            notes: client.notes ?? "",
        });

        setClientFormErrors({});
        setIsClientModalOpen(true);
    }

    const closeClientModal = () => {
        resetClientForm();
        setEditingClient(null);
        setIsClientModalOpen(false);
    }

    const handleDeleteClient = (
        client: Client,
    ) => {
        setClientToDelete(client);
        setIsDeleteModalOpen(true);
    }

    const closeDeleteModal = () => {

        setClientToDelete(null);

        setIsDeleteModalOpen(false);

    };

    const confirmDeleteClient = () => {
        if (!clientToDelete) {
            return;
        }
        setClients((current) =>
            current.filter(
                (client) =>
                    client.id !== clientToDelete.id,
            ),
        );

        notify.notify({
            variant: "success",
            title: "Client Delete",
            description: `${clientToDelete.name} has been deleted.`,
        });

        closeDeleteModal();
    }

    return (
        <>
            <Container>

                <ClientsHeader onAddClient={() =>

                    setIsClientModalOpen(true)

                }
                />

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

                    onEdit={handleEditClient}

                    onDelete={handleDeleteClient}

                />
            </Container>

            /** Add Client */

            <Modal

                open={isClientModalOpen}

                onClose={closeClientModal}

                heading={
                    editingClient
                        ? "Edit Client"
                        : "Add Client"
                }

                description={
                    editingClient
                        ? "Update client information."
                        : "Create a new client."
                }

                size="lg"

                footer={

                    <>

                        <Button

                            variant="ghost"

                            onClick={closeClientModal}

                        >

                            Cancel

                        </Button>

                        <Button

                            type="submit"

                            form="client-form"

                        >

                            {editingClient
                                ? "Update Client"
                                : "Save Client"}

                        </Button>

                    </>

                }

            >

                <ClientForm

                    id="client-form"

                    values={clientForm}

                    errors={clientFormErrors}

                    onChange={handleClientFormChange}

                    onSubmit={
                        editingClient
                            ? handleUpdateClient
                            : handleCreateClient
                    }

                />

            </Modal>

            /** Delete Client */

            <Modal
                open={isDeleteModalOpen}
                onClose={closeDeleteModal}
                heading="Delete Client"
                description="This action cannot be undone."
                footer={
                    <>
                        <Button
                            variant="ghost"
                            onClick={closeDeleteModal}
                        >
                            Cancel
                        </Button>

                        <Button
                            variant="danger"
                            onClick={confirmDeleteClient}
                        >
                            Delete Client
                        </Button>
                    </>
                }
            >

                <p>

                    Are you sure you want to delete

                    <strong>

                        {" "}
                        {clientToDelete?.name}

                    </strong>

                    ?

                </p>

            </Modal>
        </>

    );

}