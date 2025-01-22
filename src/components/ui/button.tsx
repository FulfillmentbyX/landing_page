import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
// import { Spinner } from "@/components/ui/spinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        custom: "bg-[#FFF0EF] text-[#5B403D] hover:bg-[#AF09150D]", // Custom style for ViewDetailsButton
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const ShadCNButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
ShadCNButton.displayName = "ShadCNButton";

interface IButton extends ButtonProps {
  title?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button = ({
  title,
  isLoading = false,
  isDisabled = false,
  children,
  ...rest
}: IButton) => {
  return (
    <ShadCNButton disabled={isDisabled} size="lg" {...rest}>
      {isLoading ? (
        <>
          {/* <Spinner className="mr-2" /> */}
          <span>Loading...</span>
        </>
      ) : (
        <>{title || children}</>
      )}
    </ShadCNButton>
  );
};

const AuthFormButton = ({ title }: { title: string }) => (
  <Button
    size="lg"
    type="submit"
    title={title}
    className="w-full h-[60px] text-md"
  />
);

const UtilityButton = ({
  title,
  onClick,
  className, 
}: {
  title: string;
  onClick?: () => void;
  className?: string;
}) => (
  <Button
    size="lg"
    type="button"
    title={title}
    variant="custom" 
    className={cn("w-[50%] h-[50px] text-md", className)} 
    onClick={onClick}
  />
);

// eslint-disable-next-line react-refresh/only-export-components
export { ShadCNButton, Button, buttonVariants, AuthFormButton, UtilityButton };
