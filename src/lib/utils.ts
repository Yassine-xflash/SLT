import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @module cn
 * @description
 * A utility function to conditionally join class names together.
 * It uses `clsx` to handle conditional classes and `tailwind-merge`
 * to intelligently merge Tailwind CSS classes, resolving conflicts.
 *
 * @param {...ClassValue} inputs - A list of class values.
 *   A class value can be a string, an array of strings, or an object
 *   where keys are class names and values are booleans.
 * @returns {string} A string of merged and resolved class names.
 *
 * @example
 * cn("p-4", "font-bold", { "bg-red-500": isError }, isActive && "text-blue-500");
 * // => "p-4 font-bold bg-red-500 text-blue-500" (if isError and isActive are true)
 * // Handles Tailwind CSS conflicts: cn("p-4", "p-2") => "p-2"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
