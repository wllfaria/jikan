import { Home, MagicStar } from "iconsax-react";

export const ROUTE_NAMES = {
    TIMER: "Timer",
    HISTORY: "History",
} as const;

export const ROUTES = [
    { icon: Home, title: ROUTE_NAMES.TIMER, url: "/" },
    { icon: MagicStar, title: ROUTE_NAMES.HISTORY, url: "/history" },
];
