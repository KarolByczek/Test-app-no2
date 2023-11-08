import { ReactNode } from "react";

export interface ButtonProps {
  className: string;
  onClick: () => void;
  children: ReactNode;
}

export const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
};
