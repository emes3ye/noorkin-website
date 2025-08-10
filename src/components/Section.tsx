import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
}

export default function Section({ 
  children, 
  className, 
  containerClassName,
  as: Component = "section" 
}: SectionProps) {
  return (
    <Component className={cn("py-12 sm:py-16 lg:py-20", className)}>
      <div className={cn(
        "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", 
        containerClassName
      )}>
        {children}
      </div>
    </Component>
  );
}
