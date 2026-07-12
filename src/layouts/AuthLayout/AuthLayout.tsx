import "./AuthLayout.css";

import { Outlet } from "react-router-dom";


import { cn } from "../../utils/cn";

import { AuthLayoutProps } from "./AuthLayout.types";
import { Container } from "../../components/Layout/Container";
import { Stack } from "../../components/Layout/Stack";

export function AuthLayout({
    logo,
    footer,
    aside,
    className,
    ...props
}: AuthLayoutProps) {

    return (
        <div
            className={cn(
                "fo-auth-layout",
                {
                    "fo-auth-layout--split": !!aside,
                },
                className
            )}
            {...props}
        >
            <Container
                size={aside ? "xl" : "sm"}
                align="center"
                className="fo-auth-layout__container"
            >
                <div className="fo-auth-layout__body">

                    {aside && (
                        <aside className="fo-auth-layout__aside">

                            {aside}

                        </aside>
                    )}

                    <main
                        className="fo-auth-layout__main"
                        role="main"
                    >
                        <Stack
                            spacing="xl"
                            align="center"
                            className="fo-auth-layout__content"
                        >

                            {logo && (
                                <div className="fo-auth-layout__logo">
                                    {logo}
                                </div>
                            )}

                            <Outlet />

                            {footer && (
                                <footer className="fo-auth-layout__footer">
                                    {footer}
                                </footer>
                            )}

                        </Stack>
                    </main>

                </div>
            </Container>
        </div>
    );

}