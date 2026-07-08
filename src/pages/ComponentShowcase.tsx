import { Plus, Search, CheckCircle } from "lucide-react";

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

function ComponentShowcase() {
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
        </div>
    );
}

export default ComponentShowcase;