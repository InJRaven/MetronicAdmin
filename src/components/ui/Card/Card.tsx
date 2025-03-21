import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const CardRoot = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card", className)} {...props} />
  )
);

CardRoot.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card-header", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("card-title", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card-body", className)} {...props} />
  )
);
CardBody.displayName = "CardBody";

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("card-description", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardGroup = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card-group", className)} {...props} />
  )
);
CardGroup.displayName = "CardGroup";

const CardTable = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card-table", className)} {...props} />
  )
);
CardTable.displayName = "CardTable";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card-footer", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Body: CardBody,
  Description: CardDescription,
  Group: CardGroup,
  Table: CardTable,
  Footer: CardFooter,
};
export { Card };
