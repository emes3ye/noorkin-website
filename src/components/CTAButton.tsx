import { forwardRef, ButtonHTMLAttributes, cloneElement, ReactElement } from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "primary", size = "md", children, asChild, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus-ring disabled:opacity-60 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90",
      secondary: "bg-accent text-white hover:bg-accent/90",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    };

    const combinedClassName = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      className
    );

    if (asChild && children) {
      return cloneElement(children as ReactElement, {
        className: combinedClassName,
        ...(props as any),
      });
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CTAButton.displayName = "CTAButton";

export default CTAButton;
