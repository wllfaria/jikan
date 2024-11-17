import { Separator } from "@/components/ui/separator";
import { useRouteName } from "@/hooks/use-route-name";
import { Text } from "@/components/text";
import { ROUTE_NAMES } from "@/constants";

export function Header() {
  const routeName = useRouteName();

  const routeMap = {
    [ROUTE_NAMES.TIMER]: { hide: true },
  };

  if (routeMap[routeName].hide) return <></>;

  return (
    <header className="my-4">
      <Text.H4 className="ml-4">{routeName}</Text.H4>
      <Separator className="mt-4" />
    </header>
  );
}
