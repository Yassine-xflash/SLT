/**
 * @module Card
 * @description
 * Components for displaying content in a card-like container.
 * Includes Card, CardHeader, CardFooter, CardTitle, CardDescription, and CardContent.
 * These are styled div elements using `React.forwardRef`.
 *
 * @component Card - The main container for card content.
 * @component CardHeader - The header section of a card.
 * @component CardFooter - The footer section of a card.
 * @component CardTitle - The title within a card header.
 * @component CardDescription - The description text within a card header.
 * @component CardContent - The main content area of a card.
 *
 * @example
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Card Description</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     <p>Card content goes here.</p>
 *   </CardContent>
 *   <CardFooter>
 *     <p>Card Footer</p>
 *   </CardFooter>
 * </Card>
 */
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement, // Changed to HTMLHeadingElement for semantic correctness, assuming it's a title
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  // Assuming CardTitle would typically be a heading element like <h3> or <h4>
  // If it can be any div, then HTMLDivElement is fine.
  // For this example, let's assume it's meant to be a div as originally typed.
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement, // Changed to HTMLParagraphElement for semantic correctness
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p // Changed to <p> for semantic correctness
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
