import {
  ComponentPropsWithoutRef,
  ComponentRef,
  forwardRef,
} from "react";
import { Root, Image, Fallback } from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva("avatar", {
  variants: {
    size: {
      "Extra Small": "avatar-xs",
      Small: "avatar-sm",
      Default: "",
      Large: "avatar-lg",
      "Extra Large": "avatar-xl",
    },
  },
  defaultVariants: {
    size: "Default",
  },
});
interface AvatarProps extends ComponentPropsWithoutRef<typeof Root> {
  size?: VariantProps<typeof avatarVariants>["size"];
}

const AvatarRoot = forwardRef<ComponentRef<typeof Root>, AvatarProps>(
  ({ className, size, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn(avatarVariants({ size }), className)}
      {...props}
    />
  )
);

AvatarRoot.displayName = Root.displayName || "AvatarRoot";

const AvatarImage = forwardRef<
  ComponentRef<typeof Image>,
  ComponentPropsWithoutRef<typeof Image>
>(({ className, ...props }, ref) => (
  <Image ref={ref} className={cn("avatar-img", className)} {...props} />
));
AvatarImage.displayName = Image.displayName || "AvatarImage";

const AvatarFallback = forwardRef<
  ComponentRef<typeof Fallback>,
  ComponentPropsWithoutRef<typeof Fallback>
>(({ className, ...props }, ref) => (
  <Fallback ref={ref} className={cn("avatar-fallback", className)} {...props} />
));

AvatarFallback.displayName = Fallback.displayName || "AvatarFallback";

const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
};

export { Avatar };
