import { ArrowRightIcon, Plus, ArrowRight, PlusIcon, Trash2Icon, Search, CircleDollarSign } from "../../assets/icons";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card/Card";
import { IconButton } from "../../components/IconButton";
import { Input } from "../../components/Input/Input";
import { Table } from "../../components/Table";
import { useTheme } from "../../hooks/useTheme";

import {
    dummyClients,
} from "./dummyClients";

import {
    clientColumns,
} from "./columns";


function Dashboard() {
    const {
        theme,
        resolvedTheme,
        toggleTheme,
        setTheme,
    } = useTheme();

    return (
        <div className="fo-container fo-p-6">
            <h1 className="fo-page-title">Dashboard</h1>

            <div className="fo-mt-6">
                <p className="fo-body">
                    <strong>Selected Theme:</strong> {theme}
                </p>

                <p className="fo-body fo-mt-2">
                    <strong>Resolved Theme:</strong> {resolvedTheme}
                </p>
            </div>

            <div className="fo-flex fo-gap-3 fo-mt-6">
                <button onClick={toggleTheme}>
                    Toggle Theme
                </button>

                <button onClick={() => setTheme("light")}>
                    Light
                </button>

                <button onClick={() => setTheme("dark")}>
                    Dark
                </button>

                <button onClick={() => setTheme("system")}>
                    System
                </button>
            </div>

            <Button>Create</Button>

            <Button variant="secondary">
                Cancel
            </Button>

            <Button variant="outline">
                Edit
            </Button>

            <Button variant="danger">
                Delete
            </Button>

            <Button
                size="sm"
            >
                Small
            </Button>

            <Button
                size="lg"
            >
                Large
            </Button>

            <Button
                loading
            >
                Saving...
            </Button>

            <Button
                fullWidth
            >
                Create Client
            </Button>

            <Button
                leftIcon={<PlusIcon />}
            >
                Add Client
            </Button>

            <Button
                rightIcon={<ArrowRightIcon />}
            >
                Continue
            </Button>

            --------

            <Button>
                Save
            </Button>

            <Button loading>
                Saving...
            </Button>

            <Button
                variant="danger"
                disabled
            >
                Delete
            </Button>

            <Button
                leftIcon={<Plus />}
            >
                Add Client
            </Button>

            <Button
                rightIcon={<ArrowRight />}
            >
                Continue
            </Button>

            <IconButton
                loading
                aria-label="Delete"
                variant="outline"
            >
                <Trash2Icon />
            </IconButton>

            <IconButton
                variant="danger"
                aria-label="Delete Client"
                title="Permanently delete this client"
            >
                <Trash2Icon />
            </IconButton>

            <Input
                label="Search"
                placeholder="Search clients..."
                leftIcon={<Search />}
            />

            <Input
                label="Budget"
                placeholder="5000"
                rightIcon={<CircleDollarSign />}
            />

            <Input
                label="Both Icons"
                placeholder="Search..."
                leftIcon={<Search />}
                rightIcon={<CircleDollarSign />}
            />

            <Card
                heading="Projects"
                padding="sm"
                description="Updated 2 minutes ago"
                actions={<IconButton aria-label="Refresh">...</IconButton>}
                footer="Showing 10 of 56 projects"
            >
                ...
            </Card>

            <Table
                columns={clientColumns}
                data={dummyClients}
                getRowKey={(client) => client.id}
                hoverable
                zebra
                stickyHeader
            />

        </div>
    );
}

export default Dashboard;