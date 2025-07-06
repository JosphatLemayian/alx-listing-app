import { ReactNode } from "react";

// CardProps: for reusable Card component
export interface CardProps {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
}

// ButtonProps: for reusable Button component
export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
}