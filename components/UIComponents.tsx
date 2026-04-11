import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';

// Utility for classes
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

// --- BUTTON ---
export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'link', size?: 'sm' | 'md' | 'lg' | 'icon' }>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const base = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    const variants = {
      default: "bg-fades-green text-white hover:bg-fades-green/90 shadow-md hover:shadow-lg transition-all duration-300",
      secondary: "bg-fades-brown text-white hover:bg-fades-brown/90 shadow-md",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground border-gray-200 hover:bg-gray-50 text-fades-dark",
      ghost: "hover:bg-gray-100 hover:text-fades-dark text-gray-600",
      link: "text-fades-green underline-offset-4 hover:underline",
    };
    const sizes = {
      sm: "h-9 px-3",
      md: "h-11 px-8 py-2",
      lg: "h-14 px-10 text-lg",
      icon: "h-10 w-10",
    };
    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
    );
  }
);
Button.displayName = "Button";

// --- CARD ---
export const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300", !className?.includes('bg-') && "bg-white text-fades-dark", className)} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("font-serif text-2xl font-semibold leading-none tracking-tight", className)} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-gray-500", className)} {...props}>
    {children}
  </p>
);

export const CardContent = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props}>
    {children}
  </div>
);

// --- BADGE ---
export const Badge = ({ className, variant = "default", children, ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "secondary" | "outline" }) => {
    const variants = {
        default: "border-transparent bg-fades-green/10 text-fades-green hover:bg-fades-green/20",
        secondary: "border-transparent bg-fades-brown/10 text-fades-brown hover:bg-fades-brown/20",
        outline: "text-fades-dark border-gray-200 border"
    }
    return (
        <div className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", variants[variant], className)} {...props}>
            {children}
        </div>
    )
}

// --- INPUT & LABEL ---
export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border border-gray-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fades-green disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
    ({ className, ...props }, ref) => {
      return (
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fades-green disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      )
    }
)
Textarea.displayName = "Textarea";

export const Label = forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
    ({ className, ...props }, ref) => (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-fades-dark",
          className
        )}
        {...props}
      />
    )
)
Label.displayName = "Label";

// --- SEPARATOR ---
export const Separator = ({ className, orientation = "horizontal", ...props }: React.HTMLAttributes<HTMLDivElement> & { orientation?: "horizontal" | "vertical" }) => (
    <div
      className={cn(
        "shrink-0 bg-gray-200",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
)
