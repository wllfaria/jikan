import {
  Select as ShadSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectProps } from "@radix-ui/react-select";
import { PropsWithChildren } from "react";

type RootProps = PropsWithChildren & SelectProps;

function Root({ children, ...props }: RootProps) {
  return <ShadSelect {...props}>{children}</ShadSelect>;
}

function Trigger({ children }: PropsWithChildren) {
  return (
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder={children} />
    </SelectTrigger>
  );
}

type Option = { label: string; value: string };

type OptionsProps = {
  options: Option[];
};

function Options({ options }: OptionsProps) {
  return (
    <SelectContent>
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </SelectContent>
  );
}

export const Select = {
  Root,
  Trigger,
  Options,
};
