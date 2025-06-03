/**
 * @module Button
 * @description
 * Displays a button or a component that looks like a button.
 * Based on `class-variance-authority` for variants and `React.forwardRef`.
 * Can be rendered as a child component using the `asChild` prop.
 *
 * @component Button - The button component.
 * @property {object} props - Props for the Button component.
 * @property {"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"} [props.variant="default"] - The visual style of the button.
 * @property {"default" | "sm" | "lg" | "icon"} [props.size="default"] - The size of the button.
 * @property {boolean} [props.asChild=false] - If true, renders the child component and merges props onto it.
 * @property {string} [props.className] - Additional class names for styling.
 *
 * @example
 * <Button variant="primary" size="lg">Click me</Button>
 * <Button variant="link" asChild>
 *   <a href="/login">Login</a>
 * </Button>
 *
 * @requires 'use client'
 */
"use client";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
