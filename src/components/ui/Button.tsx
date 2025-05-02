import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-navy hover:bg-navy-600 text-white focus:ring-navy-500",
    secondary: "bg-gold hover:bg-gold-600 text-white focus:ring-gold-500",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy-500",
    text: "text-navy hover:bg-navy/5 focus:ring-navy-500"
  };
  
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={twMerge(baseStyles, variants[variant], sizes[size], widthClass, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;