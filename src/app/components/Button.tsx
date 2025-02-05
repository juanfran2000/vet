import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant =
  | "default"
  | "coco"
  | "outline"
  | "secondary"
  | "ghost"
  | "jini";
type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const getButtonClasses = (
  variant: ButtonVariant = "default",
  size: ButtonSize = "default",
  className: string = ""
): string => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50";

  const variantClasses = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    coco: "bg-white text-green-500 hover:bg-green-500 hover:text-white",
    outline: "border border-gray-300 bg-white hover:bg-gray-100",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    ghost: "hover:bg-gray-100",
    jini: "bg-fuchsia-500 text-white shadow-[0_0_15px_rgba(217,70,239,0.5)] hover:bg-fuchsia-600 hover:shadow-[0_0_20px_rgba(217,70,239,0.7)] transition-shadow",
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8 text-lg",
    icon: "h-10 w-10",
  };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", variant = "default", size = "default", ...props },
    ref
  ) => {
    return (
      <button
        className={getButtonClasses(variant, size, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
