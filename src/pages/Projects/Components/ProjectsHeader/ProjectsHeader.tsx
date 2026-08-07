import "./ ProjectsHeader.css"

import { Button } from "../../../../components/Button";
import { PageHeader } from "../../../../components/PageHeader";

import type {
    ProjectsHeaderProps,
} from "./ProjectsHeader.types";

export function ProjectsHeader({

    onAddProject,

}: ProjectsHeaderProps) {

    return (

        <PageHeader

            heading="Projects"

            subtitle="Manage all client projects."

            actions={

                <Button

                    onClick={onAddProject}

                >

                    New Project

                </Button>

            }

        />

    );

}