import { Timer } from "lucide-react";

export const ROUTE_NAMES = {
    TIMER: "Timer",
} as const;

export const ROUTES = [
    {
        title: ROUTE_NAMES.TIMER,
        url: "/",
        icon: Timer,
    },
];
