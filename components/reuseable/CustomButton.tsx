import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const CustomButton: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center px-[30px] py-3 border  font-bold rounded-lg transition-all duration-200 focus:outline-none cursor-pointer text-nowrap";
  
  const variants = {
    // Green solid background, white text
    primary: "border-transparent text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-500 shadow-sm",
    
    // White background, gray border, dark text
    outline: "border-[#0D1B2A] text-gray-900 bg-white hover:bg-gray-50 focus:ring-gray-500"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};