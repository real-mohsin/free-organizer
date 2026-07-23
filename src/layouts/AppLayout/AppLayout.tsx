import "./AppLayout.css";

import { cn } from "../../utils/cn";

import type {
    AppLayoutProps,
} from "./AppLayout.types";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";

export function AppLayout({
    header,
    className,
    ...props
}: AppLayoutProps) {

    return (

        <div
            className={cn(
                "fo-app-layout",
                className,
            )}
            {...props}
        >

            <aside className="fo-app-layout__sidebar">

                <Sidebar />

            </aside>

            <div className="fo-app-layout__main">

                {header && (

                    <header className="fo-app-layout__header">

                        {header}

                    </header>

                )}

                <main className="fo-app-layout__content">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}