import "./app.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "./layout";
import { Route, Routes } from "react-router-dom";
import { Timer } from "@/pages/timer";
import { TimerProvider } from "./contexts/timer-context";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TimerProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Timer />} />
          </Route>
        </Routes>
      </TimerProvider>
    </ThemeProvider>
  );
}
