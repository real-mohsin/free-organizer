import { TableColumn } from "../../components/Table/Table.types";
import { Client } from "../dummyClients";

export const clientColumns: TableColumn<Client>[] = [
    {
        key: "id",
        title: "Client ID",
    },
    {
        key: "name",
        title: "Name",
    },
    {
        key: "company",
        title: "Company",
    },
    {
        key: "email",
        title: "Email",
    },
    {
        key: "country",
        title: "Country",
    },
    {
        key: "timezone",
        title: "Timezone",
        align: "center",
    },
    {
        key: "totalProjects",
        title: "Projects",
        align: "center",
    },
    {
        key: "totalRevenue",
        title: "Revenue",
        align: "right",
        render: (value) => `$${Number(value).toLocaleString()}`,
    },
];