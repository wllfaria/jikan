import "./app.css";
import { Layout } from "./layout";
import { Route, Routes } from "react-router-dom";
import { Timer } from "@/pages/timer";
import { TimerProvider } from "./contexts/timer-context";
import { DataProvider } from "./contexts/data-context";

export function App() {
    return (
        <DataProvider>
            <TimerProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Timer />} />
                    </Route>
                </Routes>
            </TimerProvider>
        </DataProvider>
    );
}
