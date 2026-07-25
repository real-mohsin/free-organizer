import { Button } from "../../../../components/Button";
import { Stack } from "../../../../components/Layout/Stack";
import "./ClientsHeader.css";

export function ClientsHeader() {

    return (

        <header className="fo-clients-header">

            <Stack spacing="xs">

                <h1 className="fo-page-title">

                    Clients

                </h1>

                <p className="fo-body fo-clients-header__description">

                    Manage all your clients and their projects from one place.

                </p>

            </Stack>

            <Button>

                Add Client

            </Button>

        </header>

    );

}