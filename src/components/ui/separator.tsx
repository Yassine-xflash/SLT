/**
 * @module Separator
 * @description
 * A component to visually or semantically separate content.
 * Based on Radix UI Separator primitive.
 * @see https://www.radix-ui.com/primitives/docs/components/separator
 *
 * @example
 * <div>
 *   <h4>Radix Primitives</h4>
 *   <p>An open-source UI component library.</p>
 *   <Separator className="my-4" />
 *   <div style={{ display: 'flex', alignItems: 'center' }}>
 *     <p>Blog</p>
 *     <Separator orientation="vertical" className="mx-2" />
 *     <p>Docs</p>
 *     <Separator orientation="vertical" className="mx-2" />
 *     <p>Source</p>
 *   </div>
 * </div>
 *
 * @requires 'use client'
 */
"use client";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
