export interface Client {
    id: string;

    name: string;

    email: string;

    company: string;

    country: string;

    timezone: string;

    status: "Active" | "Inactive";

    totalProjects: number;

    totalRevenue: number;
}

export const dummyClients: Client[] = [
    {
        id: "CL-001",
        name: "John Smith",
        email: "john.smith@acme.com",
        company: "Acme Inc.",
        country: "United States",
        timezone: "UTC-5",
        status: "Active",
        totalProjects: 12,
        totalRevenue: 18450,
    },
    {
        id: "CL-002",
        name: "Sarah Johnson",
        email: "sarah@nova.io",
        company: "Nova Solutions",
        country: "Canada",
        timezone: "UTC-4",
        status: "Active",
        totalProjects: 7,
        totalRevenue: 9650,
    },
    {
        id: "CL-003",
        name: "Ali Hassan",
        email: "ali@digitalhub.ae",
        company: "Digital Hub",
        country: "UAE",
        timezone: "UTC+4",
        status: "Inactive",
        totalProjects: 4,
        totalRevenue: 4200,
    },
    {
        id: "CL-004",
        name: "Emma Brown",
        email: "emma@pixelstudio.co.uk",
        company: "Pixel Studio",
        country: "United Kingdom",
        timezone: "UTC+0",
        status: "Active",
        totalProjects: 18,
        totalRevenue: 32100,
    },
    {
        id: "CL-005",
        name: "Hiroshi Tanaka",
        email: "hiroshi@sakura.jp",
        company: "Sakura Tech",
        country: "Japan",
        timezone: "UTC+9",
        status: "Active",
        totalProjects: 10,
        totalRevenue: 15800,
    },
];