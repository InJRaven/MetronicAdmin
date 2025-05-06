import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import {
  Root,
  Trigger,
  Group,
  Value,
  ScrollUpButton,
  ScrollDownButton,
  Icon,
  Content,
  Portal,
  Viewport,
  Label,
  Item,
  ItemIndicator,
  ItemText,
  Separator,
} from "@radix-ui/react-select";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { KeenIcon } from "@/components/ui";

const selectTriggerVariants = cva(
  "radix-select ring-0 ring-offset-0 ring-offset-background focus:ring-offset-0",
  {
    variants: {
      size: {
        Small: "select-sm",
        Default: "",
        Large: "select-lg",
      },
    },
    defaultVariants: {
      size: "Default",
    },
  }
);

interface SelectTriggerProps
  extends Omit<ComponentPropsWithoutRef<typeof Trigger>, "size"> {
  size?: VariantProps<typeof selectTriggerVariants>["size"];
}

const SelectTrigger = forwardRef<
  ComponentRef<typeof Trigger>,
  SelectTriggerProps
>(({ className, children, size, ...props }, ref) => (
  <Trigger
    ref={ref}
    className={cn(selectTriggerVariants({ size }), className)}
    {...props}
  >
    {children}
    <Icon asChild>
      <KeenIcon icon="down"/>
    </Icon>
  </Trigger>
));

SelectTrigger.displayName = Trigger.displayName;

const SelectScrollUpButton = forwardRef<
  ComponentRef<typeof ScrollUpButton>,
  ComponentPropsWithoutRef<typeof ScrollUpButton>
>(({ className, ...props }, ref) => (
  <ScrollUpButton
    ref={ref}
    className={cn("radix-select-scroll-button", className)}
    {...props}
  >
    <KeenIcon icon="up"/>
  </ScrollUpButton>
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;

const SelectScrollDownButton = forwardRef<
  ComponentRef<typeof ScrollDownButton>,
  ComponentPropsWithoutRef<typeof ScrollDownButton>
>(({ className, ...props }, ref) => (
  <ScrollDownButton
    ref={ref}
    className={cn("radix-select-scroll-button", className)}
    {...props}
  >
    <KeenIcon icon="down"/>
  </ScrollDownButton>
));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;

const SelectContent = forwardRef<
  ComponentRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      className={cn(
        "radix-select-content data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 duration-200",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <Viewport>{children}</Viewport>
      <SelectScrollDownButton />
    </Content>
  </Portal>
));
SelectContent.displayName = Content.displayName;

const SelectLabel = forwardRef<
  ComponentRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => (
  <Label ref={ref} className={cn("radix-select-label", className)} {...props} />
));
SelectLabel.displayName = Label.displayName;

const SelectItem = forwardRef<
  ComponentRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, children, ...props }, ref) => (
  <Item ref={ref} className={cn("radix-select-item", className)} {...props}>
    <span className="radix-check">
      <ItemIndicator>
        <KeenIcon icon="check"/>
      </ItemIndicator>
    </span>

    <ItemText>{children}</ItemText>
  </Item>
));
SelectItem.displayName = Item.displayName;

const SelectSeparator = forwardRef<
  ComponentRef<typeof Separator>,
  ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={cn("radix-select-separator", className)}
    {...props}
  />
));
SelectSeparator.displayName = Separator.displayName;

const Select = {
  Root,
  Group,
  Value,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Label: SelectLabel,
  Item: SelectItem,
  Separator: SelectSeparator,
  ScrollUpButton: SelectScrollUpButton,
  ScrollDownButton: SelectScrollDownButton,
};

export { Select };
