import { Outlet } from "react-router-dom";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export function Layout() {
    return (
        <section className="flex flex-col h-[100vh]">
            <Header />

            <section className="flex flex-1">
                <Sidebar />
                <main className="flex-1">
                    <Outlet />
                </main>
            </section>

            <footer className="px-4 h-[80px] flex justify-end items-center">
                <span className="font-bento text-primary-700 text-[64px]">Jikan</span>
            </footer>
        </section>
    );
}
