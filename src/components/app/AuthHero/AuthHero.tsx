import { Check } from "lucide-react";
import { cn } from "../../../utils/cn";
import { Stack } from "../../Layout/Stack";
import "./AuthHero.css";

import type { AuthHeroProps } from "./AuthHero.types";

const DEFAULT_FEATURES = [
    {
        id: "clients",
        content: "Client Management",
    },
    {
        id: "projects",
        content: "Project Tracking",
    },
    {
        id: "invoices",
        content: "Invoices & Payments",
    },
    {
        id: "tasks",
        content: "Task Management",
    },
    {
        id: "reports",
        content: "Reports & Analytics",
    },
] as const;

export function AuthHero({
    heading = "Free Organizer",
    supportingText = "Manage your freelance business from one place. Stay organized, track projects, manage clients, monitor payments, and grow your business with confidence.",
    features = DEFAULT_FEATURES,
    illustration,
    className,
    ...props
}: AuthHeroProps) {

    return (
        <section
            className={cn(
                "fo-auth-hero",
                className
            )}
            {...props}
        >
            <Stack
                spacing="xl"
                className="fo-auth-hero__content"
            >
                <header className="fo-auth-hero__header">

                    <h1 className="fo-auth-hero__heading">
                        {heading}
                    </h1>

                    <p className="fo-auth-hero__supporting-text">
                        {supportingText}
                    </p>

                </header>

                {features.length > 0 && (
                    <ul className="fo-auth-hero__features">

                        {features.map((feature) => (
                            <li
                                key={feature.id}
                                className="fo-auth-hero__feature"
                            >
                                <span
                                    className="fo-auth-hero__feature-icon"
                                    aria-hidden="true"
                                >
                                    <Check />
                                </span>

                                <span className="fo-auth-hero__feature-text">
                                    {feature.content}
                                </span>
                            </li>
                        ))}

                    </ul>
                )}

                {illustration && (
                    <div className="fo-auth-hero__illustration">
                        {illustration}
                    </div>
                )}

            </Stack>
        </section>
    );

}