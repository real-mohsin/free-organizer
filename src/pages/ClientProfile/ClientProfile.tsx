import "./ClientProfile.css";

import { Container } from "../../components/Layout/Container";
import { ClientProfileHeader } from "./Components/ClientProfileHeader";
import { useNavigate } from "react-router-dom";
import { mockClients } from "../Clients/data/mockClients";
import { ClientOverview } from "./Components/ClientOverview";
import { ClientStatistics } from "./Components/ClientStatistics/ClientStatistics";
import { PageSection } from "../../components/Layout/PageSection";
import { Stack } from "../../components/Layout/Stack";
export const mockClient = mockClients[0];

export function ClientProfile() {
    const navigate = useNavigate();


    return (

        <Container>

            <Stack spacing="lg">

                <ClientProfileHeader
                    client={mockClient}

                    onBack={() => navigate("/clients")}

                    onEdit={() => console.log("Edit")}
                />

                <PageSection
                    heading="Overview">

                    <ClientOverview
                        client={mockClient}
                    />

                </PageSection>

                <PageSection
                    heading="Statistics">

                    <ClientStatistics
                        client={mockClient} />

                </PageSection>

            </Stack>

        </Container>

    );

}