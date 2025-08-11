import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, style, ...props }, ref) => {
    const baseStyles = 'transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
      primary: 'text-white hover:text-white',
      secondary: 'text-black hover:text-black'
    };
    
    const sizes = {
      sm: 'px-4 py-2',
      md: 'px-6 py-2',
      lg: 'px-8 py-3'
    };
    
    // Default font styles
    const defaultFontStyles = {
      fontFamily: 'Poppins',
      fontWeight: '400',
      fontSize: '16px',
      ...style
    };
    
    const primaryStyles = `
      bg-[#CBB682] 
      hover:bg-[#785F37] 
      focus:ring-[#CBB682]
    `;
    
    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          variant === 'primary' && primaryStyles,
          className
        )}
        style={defaultFontStyles}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CustomButton.displayName = 'CustomButton'; 