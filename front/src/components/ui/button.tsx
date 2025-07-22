import { tv } from "tailwind-variants";

interface ButtonProps {
  style: "primary" | "secondary" | "white";
  children?: React.ReactNode;
  isFullWidth?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg" | "xlg";
}

const btnStyle = tv({
  base: "border flex flex-row p-4 rounded-3xl items-center justify-center space-x-2 cursor-pointer w-20 h-13 font-semibold transition-colors text-white hover:bg-white",
  variants: {
    style: {
      primary: "border-[#2D5CF2] bg-[#2D5CF2] hover:text-[#2D5CF2]",
      secondary: "border-[#121827] bg-[#121827] hover:text-[#121827]",
      white: "border-[#2D5CF2] bg-white text-[#2D5CF2] hover:text-white hover:bg-[#2D5CF2]",
    },
    size: {
      sm: "w-20",
      md: "w-30 text-sm",
      lg: "w-40",
      xlg: "w-54",
    },
    isFullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    size: "md",
    isFullWidth: false,
    style: "primary",
  },
});

export function Button({ style, children, isFullWidth, className, size }: ButtonProps) {

  return (
    <button className={btnStyle({ style, isFullWidth, size, className })}>
      {children}
    </button>
  );
}