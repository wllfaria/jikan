import { PropsWithChildren } from "react";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  PropsWithChildren;

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & PropsWithChildren;

function H1({ children, className, ...props }: HeadingProps) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

function H4({ children, className, ...props }: HeadingProps) {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h4>
  );
}

function P({ children, className, ...props }: TextProps) {
  return (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

export const Text = {
  P,
  H1,
  H4,
};
