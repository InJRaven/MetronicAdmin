import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// Biến thể cho Card chính
const cardVariants = cva("card", {
  variants: {
    variant: {
      default: "",
      accent: "card-accent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});


const Card = ({
  className,
  variant = "default",
  ...props
}: HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>) => {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  );
};


const CardHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot="card-header"
      className={cn("card-header", className)}
      {...props}
    />
  );
};

const CardContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot="card-content"
      className={cn("card-content", className)}
      {...props}
    />
  );
};

const CardTable = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot="card-table"
      className={cn("card-table", className)}
      {...props}
    />
  );
};

const CardFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot="card-footer"
      className={cn("card-footer", className)}
      {...props}
    />
  );
};

const CardHeading = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot="card-heading"
      className={cn("space-y-1", className)}
      {...props}
    />
  );
};

const CardDescription = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot="card-description"
      className={cn("card-description", className)}
      {...props}
    />
  );
};

const CardToolbar = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot="card-toolbar"
      className={cn("card-toolbar", className)}
      {...props}
    />
  );
};

const CardTitle = ({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      data-slot="card-title"
      className={cn("card-title", className)}
      {...props}
    />
  );
};

// ✅ Xuất ra toàn bộ các phần
export {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardHeading,
  CardTitle,
  CardTable,
  CardToolbar,
};
