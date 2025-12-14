/**
 * Utility for merging Tailwind CSS classes
 * Simple alternative to clsx + tailwind-merge
 */

export type ClassValue = string | number | boolean | undefined | null | ClassValue[];

export function cn(...classes: ClassValue[]): string {
  return classes
    .flat()
    .filter(Boolean)
    .join(' ')
    .trim();
}

/**
 * Conditional class utility
 */
export function cva(base: string, variants: Record<string, Record<string, string>>) {
  return (props: Record<string, string | boolean | undefined>) => {
    let result = base;
    
    Object.entries(variants).forEach(([key, values]) => {
      const value = props[key];
      if (value && typeof value === 'string' && values[value]) {
        result += ' ' + values[value];
      }
    });
    
    return result.trim();
  };
}