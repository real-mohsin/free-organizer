import type {
    Project,
} from "../../../../models/Project.models";

export interface ProjectsTableProps {

    /**
     * Projects to display.
     */
    projects: Project[];

    /**
     * View project.
     */
    onView?: (
        project: Project,
    ) => void;

    /**
     * Edit project.
     */
    onEdit?: (
        project: Project,
    ) => void;

    /**
     * Delete project.
     */
    onDelete?: (
        project: Project,
    ) => void;

}