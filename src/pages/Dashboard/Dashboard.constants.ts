import {
    CreditCard,
    DollarSign,
    FolderKanban,
    Users,
} from "lucide-react";

import type {
    RevenueDataPoint,
} from "../../components/Charts/RevenueLineChart";

export const DASHBOARD_STATS = [

    {
        heading: "Revenue",
        value: "$18,450",
        description: "+12.5% from last month",
        icon: DollarSign,
    },

    {
        heading: "Clients",
        value: "24",
        description: "3 new this month",
        icon: Users,
    },

    {
        heading: "Projects",
        value: "9",
        description: "6 active projects",
        icon: FolderKanban,
    },

    {
        heading: "Outstanding",
        value: "$2,300",
        description: "4 unpaid invoices",
        icon: CreditCard,
    },

] as const;

export const REVENUE_DATA: RevenueDataPoint[] = [

    { label: "Jan", value: 5200 },
    { label: "Feb", value: 6100 },
    { label: "Mar", value: 7200 },
    { label: "Apr", value: 8400 },
    { label: "May", value: 9600 },
    { label: "Jun", value: 11200 },
    { label: "Jul", value: 12800 },
    { label: "Aug", value: 14500 },
    { label: "Sep", value: 16100 },
    { label: "Oct", value: 17300 },
    { label: "Nov", value: 18450 },

];

export const RECENT_CLIENTS = [

    {
        id: 1,
        name: "Acme Inc.",
        country: "United States",
        project: "CRM Dashboard",
        status: "Active",
    },

    {
        id: 2,
        name: "Nova Studio",
        country: "Canada",
        project: "Landing Page",
        status: "Pending",
    },

    {
        id: 3,
        name: "Pixel Forge",
        country: "Germany",
        project: "Mobile App",
        status: "Active",
    },

    {
        id: 4,
        name: "Bright Labs",
        country: "Australia",
        project: "Marketing Website",
        status: "Completed",
    },

];