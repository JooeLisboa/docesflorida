import { HTMLAttributes, ReactNode } from 'react';

type CardShellProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function CardShell({ children, className = '', ...rest }: CardShellProps) {
  return (
    <section
      className={`rounded-[28px] border border-white/70 bg-white/75 p-5 shadow-soft backdrop-blur md:p-8 ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}
