import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLElement>;

export function Container({ className = "", ...props }: ContainerProps) {
  return <div className={`mx-auto w-full min-w-0 max-w-[1440px] pl-[max(1.25rem,var(--safe-left))] pr-[max(1.25rem,var(--safe-right))] sm:px-8 lg:px-12 ${className}`} {...props} />;
}
