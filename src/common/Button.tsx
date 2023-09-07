import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
  size?: "sm" | "md" | "lg";
  color?: "outlined" | "primary" | "secondary" | "error";
}

const Button = ({
  size = "sm",
  color = "primary",
  children,
  className,
  ...props
}: ButtonProps) => {
  const getSize = (size: ButtonProps["size"]): string => {
    switch (size) {
      case "sm":
        return "px-8 py-2";

      case "md":
        return "px-16 py-4";

      case "lg":
        return "px-20 py-4 text-xl";

      default:
        return "";
    }
  };

  const getColor = (color: ButtonProps["color"]): string => {
    switch (color) {
      case "outlined":
        return "bg-white/60 hover:bg-white";

      case "primary":
        return "bg-sky-400 hover:bg-sky-600";

      case "secondary":
        return "bg-pink-800/70 hover:bg-pink-800/80";

      case "error":
        return "bg-red-200";

      default:
        return "";
    }
  };

  return (
    <button
      className={twMerge(
        `${getColor(color)} ${getSize(
          size,
        )} rounded-md border border-white text-black`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
