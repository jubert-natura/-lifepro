import * as React from "react";
import { cn } from "@/lib/utils";
import "./button.css";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn("btn", `btn--${variant}`, `btn--${size}`, className)}
      {...props}
    />
  )
);
Button.displayName = "Button";
