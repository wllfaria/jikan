import { ButtonProps, Button as ShadButton } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { PropsWithChildren } from "react";

type RootProps = PropsWithChildren & ButtonProps;

function Root({ children, ...props }: RootProps) {
  return <ShadButton {...props}>{children}</ShadButton>;
}

function Loader() {
  return <Loader2 className="animate-spin" />;
}

export const Button = {
  Root,
  Loader,
};
