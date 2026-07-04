import { ArrowRightIcon, PlusIcon } from "../../assets/icons";
import { Button } from "../../components/Button";
import { useTheme } from "../../hooks/useTheme";

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

        </div>
    );
}

export default Dashboard;