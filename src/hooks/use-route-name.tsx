import { useLocation } from "react-router-dom";
import { ROUTES } from "@/constants";

export function useRouteName() {
  const { pathname } = useLocation();
  const name = ROUTES.find((route) => route.url === pathname)!.title;
  return name;
}
