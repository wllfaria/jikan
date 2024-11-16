import { PropsWithChildren } from "react";

function H1({ children }: PropsWithChildren) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}

function P({ children }: PropsWithChildren) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

export const Text = {
  P,
  H1,
};
