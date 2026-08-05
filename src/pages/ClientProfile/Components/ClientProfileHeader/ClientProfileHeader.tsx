import "./ClientProfileHeader.css";

import {
    ArrowLeft,
    Pencil,
} from "lucide-react";

import { Avatar } from "../../../../components/Avatar";
import { Badge } from "../../../../components/Badge";
import { Button } from "../../../../components/Button";
import { HStack } from "../../../../components/Layout/HStack/Hstack";
import { Stack } from "../../../../components/Layout/Stack";

import type {
    ClientProfileHeaderProps,
} from "./ClientProfileHeader.types";

export function ClientProfileHeader({

    client,

    onBack,

    onEdit,

}: ClientProfileHeaderProps) {

    return (

        <Stack
            spacing="xl"
            className="fo-client-profile-header"
        >

            <Button
                variant="ghost"
                leftIcon={<ArrowLeft size={18} />}
                onClick={onBack}
            >
                Back to Clients
            </Button>

            <HStack
                justify="space-between"
                align="center"
            >

                <HStack
                    spacing="lg"
                    align="center"
                >

                    <Avatar
                        src={client.avatar}
                        name={client.name}
                        size="xl"
                    />

                    <Stack spacing="xs">

                        <h1 className="fo-client-profile-header__name">

                            {client.name}

                        </h1>

                        <p className="fo-client-profile-header__company">

                            {client.company || "No company"}

                        </p>

                        <Badge
                            variant={
                                client.status === "active"
                                    ? "primary"
                                    : client.status === "inactive"
                                        ? "warning"
                                        : "default"
                            }
                        >

                            {client.status}

                        </Badge>

                    </Stack>

                </HStack>

                <Button
                    leftIcon={<Pencil size={16} />}
                    onClick={onEdit}
                >
                    Edit Client
                </Button>

            </HStack>

        </Stack>

    );

}