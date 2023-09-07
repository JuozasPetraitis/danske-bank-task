import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TitleProps extends ComponentProps<"p"> {
  align?: "left" | "center" | "right";
  size?: "xs" | "sm" | "md" | "lg";
}

const Title = ({
  align = "center",
  size = "md",
  className,
  children,
  ...props
}: TitleProps) => {
  const getSize = (size: TitleProps["size"]): string => {
    switch (size) {
      case "xs":
        return "text-lg md:text-2xl";

      case "sm":
        return "text-2xl md:text-4xl";

      case "md":
        return "text-5xl md:text-7xl font-semibold";

      case "lg":
        return "text-7xl md:text-9xl font-semibold";

      default:
        return "";
    }
  };

  const getAlign = (align: TitleProps["align"]): string => {
    switch (align) {
      case "left":
        return "text-left";

      case "center":
        return "text-center";

      case "right":
        return "text-right";

      default:
        return "";
    }
  };

  return (
    <p
      className={twMerge(`${getSize(size)} ${getAlign(align)}`, className)}
      {...props}
    >
      {children}
    </p>
  );
};

export default Title;
