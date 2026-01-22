import React from 'react';
import { cn } from '../../utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 border-transparent",
      secondary: "bg-transparent border border-primary text-primary hover:bg-primary/10",
      glass: "backdrop-blur-md bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20",
      ghost: "bg-transparent text-muted-foreground hover:text-white hover:bg-white/5 border-transparent"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg font-semibold"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none border",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
