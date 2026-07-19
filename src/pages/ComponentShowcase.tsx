import { Plus, Search, CheckCircle, Globe, DollarSign, Users, FolderKanban, CreditCard } from "lucide-react";

import { Button } from "../components/Button";
import { IconButton } from "../components/IconButton";
import { Input } from "../components/Input";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { Table } from "../components/Table";

import {
    clientColumns,
} from "./columns";

import {
    dummyClients,
} from "./dummyClients";
import { Avatar } from "../components/Avatar";
import { Select } from "../components/Select";
import { Textarea } from "../components/Textarea";
import { Modal } from "../components/Modal";
import { useState } from "react";
import { Stack } from "../components/Layout/Stack";
import { Grid } from "../components/Layout/Grid";
import { Divider } from "../components/Layout/Divider/Divider";
import { StatCard } from "../components/DataDisplay/StatCard";
import { ChartCard } from "../components/DataDisplay/ChartCard";
import { RevenueLineChart } from "../components/Charts/RevenueLineChart/RevenueLineChart";

const revenueData = [
        { label: "Jan", value: 1200 },
        { label: "Feb", value: 1800 },
        { label: "Mar", value: 1600 },
        { label: "Apr", value: 2400 },
        { label: "May", value: 2800 },
        { label: "Jun", value: 3400 },
    ];

function ChartPlaceholder() {


    return (

        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "18rem",
                borderRadius: "var(--fo-radius-lg)",
                border: "1px dashed var(--fo-color-border)",
                color: "var(--fo-color-text-secondary)",
            }}
        >
            📈 Chart Placeholder
        </div>

    );

}

function ComponentShowcase() {

    const countries = [
        {
            label: "Pakistan",
            value: "pk",
        },
        {
            label: "Japan",
            value: "jp",
        },
        {
            label: "Germany",
            value: "de",
        },
        {
            label: "United States",
            value: "us",
        },
        {
            label: "United Kingdom",
            value: "uk",
        },
    ];

    const [modalOpen, setModalOpen] = useState(false);


    return (
        <div
            style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
            }}
        >
            <h1>Free Organizer Design System</h1>

            {/* ------------------------------------------------ */}
            {/* Buttons */}
            {/* ------------------------------------------------ */}

            <Card
                heading="Buttons"
                description="Button component variations"
            >
                <div
                    style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                    }}
                >
                    <Button>
                        Default
                    </Button>

                    <Button variant="primary">
                        Primary
                    </Button>

                    <Button variant="secondary">
                        Secondary
                    </Button>

                    <Button variant="danger">
                        Danger
                    </Button>

                    <Button variant="outline">
                        Outline
                    </Button>

                    <Button variant="ghost">
                        Ghost
                    </Button>

                    <Button
                        leftIcon={<Plus size={18} />}
                    >
                        Add Client
                    </Button>

                    <Button loading>
                        Saving...
                    </Button>

                    <Button disabled>
                        Disabled
                    </Button>
                </div>
            </Card>

            {/* ------------------------------------------------ */}
            {/* Icon Buttons */}
            {/* ------------------------------------------------ */}

            <Card
                heading="Icon Buttons"
                description="Different icon button variants"
            >
                <div
                    style={{
                        display: "flex",
                        gap: "1rem",
                    }}
                >
                    <IconButton
                        aria-label="Add"
                    >
                        <Plus />
                    </IconButton>

                    <IconButton
                        variant="primary"
                        aria-label="Search"
                    >
                        <Search />
                    </IconButton>

                    <IconButton
                        variant="danger"
                        aria-label="Delete"
                    >
                        ✕
                    </IconButton>
                </div>
            </Card>

            {/* ------------------------------------------------ */}
            {/* Inputs */}
            {/* ------------------------------------------------ */}

            <Card
                heading="Inputs"
                description="Input component examples"
            >
                <div
                    style={{
                        display: "grid",
                        gap: "1rem",
                        maxWidth: 450,
                    }}
                >
                    <Input
                        label="Client Name"
                        placeholder="John Smith"
                    />

                    <Input
                        label="Email"
                        placeholder="john@email.com"
                    />

                    <Input
                        label="Error Example"
                        error="Email is required"
                    />

                    <Input
                        label="Disabled"
                        disabled
                        value="Disabled Input"
                    />
                </div>
            </Card>

            {/* ------------------------------------------------ */}
            {/* Badges */}
            {/* ------------------------------------------------ */}

            <Card
                heading="Badges"
                description="Badge variants"
            >
                <div
                    style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                    }}
                >
                    <Badge>Default</Badge>

                    <Badge variant="primary">
                        Primary
                    </Badge>

                    <Badge variant="secondary">
                        Secondary
                    </Badge>

                    <Badge variant="success">
                        Active
                    </Badge>

                    <Badge variant="warning">
                        Pending
                    </Badge>

                    <Badge variant="danger">
                        Overdue
                    </Badge>

                    <Badge variant="info">
                        New
                    </Badge>

                    <Badge
                        variant="success"
                        dot
                    >
                        Online
                    </Badge>

                    <Badge
                        variant="success"
                        startIcon={
                            <CheckCircle size={14} />
                        }
                    >
                        Completed
                    </Badge>
                </div>
            </Card>

            {/* ------------------------------------------------ */}
            {/* Avatar */}
            {/* ------------------------------------------------ */}

            <Card
                heading="Avatar"
                description="Avatar component variations"
            >
                <div
                    style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                        alignItems: "center",
                    }}
                >
                    {/* Image */}
                    <Avatar
                        src="https://i.pravatar.cc/150?img=1"
                        name="John Smith"
                    />

                    {/* Initials */}
                    <Avatar
                        name="Sarah Khan"
                    />

                    {/* One Name */}
                    <Avatar
                        name="Mohsin"
                    />

                    {/* Online */}
                    <Avatar
                        name="Emily Johnson"
                        online
                    />

                    {/* Small */}
                    <Avatar
                        size="sm"
                        name="Alex Brown"
                    />

                    {/* Large */}
                    <Avatar
                        size="lg"
                        name="Emma Wilson"
                    />

                    {/* Extra Large */}
                    <Avatar
                        size="xl"
                        name="Michael Lee"
                    />

                    {/* Rounded */}
                    <Avatar
                        variant="rounded"
                        name="David Miller"
                    />

                    {/* Icon Fallback */}
                    <Avatar />

                    {/* Broken Image */}
                    <Avatar
                        src="broken-image.jpg"
                        name="Fallback Example"
                    />
                </div>
            </Card>

            {/* ------------------------------------------------ */}
            {/* Table */}
            {/* ------------------------------------------------ */}

            <Card
                heading="Table"
                description="Reusable data table"
            >
                <Table
                    columns={clientColumns}
                    data={dummyClients}
                    getRowKey={(client) => client.id}
                    hoverable
                    zebra
                    stickyHeader
                />
            </Card>

            {/* ------------------------------------------------ */}
            {/* Select */}
            {/* ------------------------------------------------ */}


            <Card
                heading="Select"
                description="Reusable select component variations"
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    <Select
                        label="Country"
                        placeholder="Select Country"
                        options={countries}
                    />

                    <Select
                        label="Country"
                        placeholder="Select Country"
                        options={countries}
                        leftIcon={<Globe size={18} />}
                    />

                    <Select
                        label="Required"
                        placeholder="Select Country"
                        options={countries}
                        required
                    />

                    <Select
                        label="Error"
                        placeholder="Select Country"
                        options={countries}
                        error="Country is required."
                    />

                    <Select
                        label="Helper Text"
                        placeholder="Select Country"
                        options={countries}
                        helperText="Choose your client's country."
                    />

                    <Select
                        label="Disabled"
                        placeholder="Select Country"
                        options={countries}
                        disabled
                    />

                    <Select
                        label="Small"
                        size="sm"
                        placeholder="Select Country"
                        options={countries}
                    />

                    <Select
                        label="Medium"
                        size="md"
                        placeholder="Select Country"
                        options={countries}
                    />

                    <Select
                        label="Large"
                        size="lg"
                        placeholder="Select Country"
                        options={countries}
                    />

                    <Select
                        label="Full Width"
                        placeholder="Select Country"
                        options={countries}
                        fullWidth
                    />
                </div>
            </Card>

            {/* ------------------------------------------------ */}
            {/* Textarea */}
            {/* ------------------------------------------------ */}

            <Card
                heading="Textarea"
                description="Textarea component variations"
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    <Textarea
                        label="Basic"
                        placeholder="Write something..."
                    />

                    <Textarea
                        label="Helper Text"
                        helperText="Visible only to you."
                        placeholder="Project notes..."
                    />

                    <Textarea
                        label="Required"
                        required
                        placeholder="Enter description..."
                    />

                    <Textarea
                        label="Error"
                        error="Description is required."
                        placeholder="Enter description..."
                    />

                    <Textarea
                        label="Character Counter"
                        placeholder="Maximum 500 characters..."
                        showCount
                        maxLength={500}
                    />

                    <Textarea
                        label="Disabled"
                        disabled
                        defaultValue="This field is disabled."
                    />

                    <Textarea
                        label="Small"
                        size="sm"
                    />

                    <Textarea
                        label="Medium"
                        size="md"
                    />

                    <Textarea
                        label="Large"
                        size="lg"
                    />

                    <Textarea
                        label="No Resize"
                        resize="none"
                    />
                </div>
            </Card>


            {/* ------------------------------------------------ */}
            {/* Modals */}
            {/* ------------------------------------------------ */}

            <Card
                heading="Modal"
                description="Reusable modal component"
            >
                <Button
                    onClick={() => setModalOpen(true)}
                >
                    Open Modal
                </Button>

                <Modal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    heading="Create Client"
                    description="Fill in the client details below."
                    size="md"
                    footer={
                        <>
                            <Button
                                variant="secondary"
                                onClick={() => setModalOpen(false)}
                            >
                                Cancel
                            </Button>

                            <Button>
                                Save Client
                            </Button>
                        </>
                    }
                >
                    <Input
                        label="Client Name"
                        placeholder="John Doe"
                        fullWidth
                    />

                    <div style={{ height: 16 }} />

                    <Input
                        label="Email"
                        placeholder="john@example.com"
                        fullWidth
                    />

                    <div style={{ height: 16 }} />

                    <Textarea
                        label="Notes"
                        placeholder="Additional notes..."
                        rows={4}
                        fullWidth
                    />
                </Modal>
            </Card>

            {/* ------------------------------------------------ */}
            {/* Stack */}
            {/* ------------------------------------------------ */}

            <Card
                heading="Stack"
                description="Vertical layout component"
            >
                <Stack spacing="lg">

                    <Input
                        label="Full Name"
                        placeholder="John Doe"
                        fullWidth
                    />

                    <Input
                        label="Email"
                        placeholder="john@example.com"
                        fullWidth
                    />

                    <Textarea
                        label="Notes"
                        rows={4}
                        fullWidth
                    />

                    <Button>
                        Save
                    </Button>

                </Stack>
            </Card>

            <Card
                heading="Grid"
                description="Responsive grid layout"
            >
                <Grid
                    columns={3}
                    spacing="lg"
                >
                    <Card heading="Card 1">
                        Content
                    </Card>

                    <Card heading="Card 2">
                        Content
                    </Card>

                    <Card heading="Card 3">
                        Content
                    </Card>

                    <Card heading="Card 4">
                        Content
                    </Card>

                    <Card heading="Card 5">
                        Content
                    </Card>

                    <Card heading="Card 6">
                        Content
                    </Card>
                </Grid>
            </Card>

            {/* ------------------------------------------------ */}
            {/* Divider */}
            {/* ------------------------------------------------ */}

            <Card
                heading="Divider"
                description="Separate content visually."
            >
                <Stack spacing="lg">

                    <Divider />

                    <Divider variant="dashed" />

                    <Divider variant="dotted" />

                    <Divider>
                        OR
                    </Divider>

                    <Divider labelAlign="left">
                        Filters
                    </Divider>

                    <Divider labelAlign="center">
                        Settings
                    </Divider>

                    <Divider labelAlign="right">
                        Advanced
                    </Divider>

                </Stack>
            </Card>

            {/* ------------------------------------------------ */}
            {/* StatCard */}
            {/* ------------------------------------------------ */}

            <Stack spacing="xl">

                <h2>StatCard</h2>

                <Grid
                    columns={2}
                >

                    <StatCard
                        heading="Revenue"
                        value="$4,250"
                        footer="+12% compared to last month"
                        icon={<DollarSign size={18} />}
                    />

                    <StatCard
                        heading="Clients"
                        value="24"
                        footer="+2 new clients"
                        icon={<Users size={18} />}
                    />

                    <StatCard
                        heading="Projects"
                        value="12"
                        footer="3 due this week"
                        icon={<FolderKanban size={18} />}
                    />

                    <StatCard
                        heading="Outstanding Payments"
                        value="$1,450"
                        footer="Awaiting payment"
                        icon={<CreditCard size={18} />}
                    />

                </Grid>

            </Stack>

            {/* ------------------------------------------------ */}
            {/* ChartCard */}
            {/* ------------------------------------------------ */}

            <Stack spacing="xl">

                <h2>ChartCard</h2>

                <ChartCard
                    heading="Revenue"
                    subtitle="Last 6 Months"
                >
                    <RevenueLineChart
                        data={revenueData}
                    />
                </ChartCard>

                <ChartCard
                    heading="Monthly Expenses"
                >
                    <ChartPlaceholder />
                </ChartCard>

                <ChartCard
                    heading="Revenue"
                    subtitle="Last 6 Months"
                    actions={

                        <Button
                            variant="ghost"
                            size="sm"
                        >
                            Export
                        </Button>

                    }
                >
                    <ChartPlaceholder />
                </ChartCard>

            </Stack>
        </div>
    );
}

export default ComponentShowcase;