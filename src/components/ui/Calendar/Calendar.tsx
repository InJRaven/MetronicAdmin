import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ComponentProps } from "react";
import { DayPicker } from "react-day-picker";

type CalendarProps = ComponentProps<typeof DayPicker>;
const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => (
  <DayPicker
    showOutsideDays={showOutsideDays}
    className={cn("p-[1.2rem]", className)}
    classNames={{
      months: "months",
      month: "w-full",
      month_caption: "calendar-header",
      caption_label: "caption",
      nav: "calendar-navigation",
      button_previous: cn(
        buttonVariants({ variant: "ghost" }),
        "calendar-button "
      ),
      button_next: cn(buttonVariants({ variant: "ghost" }), "calendar-button"),
      weekday: "weekday",
      day_button: "day-button",
      day: "group day",
      range_start: "range-start",
      range_end: "range-end",
      range_middle: "range-middle",
      today: "today",
      outside: "outside",
      hidden: "invisible",
      week_number: "week-number",

      ...classNames,
    }}
    components={{
      Chevron: (props) => {
        if (props.orientation === "left") {
          return (
            <ChevronLeft className="h-[1.6rem] w-[1.6rem] rtl:rotate-180" />
          );
        } else {
          return (
            <ChevronRight className="h-[1.6rem] w-[1.6rem] rtl:rotate-180" />
          );
        }
      },
    }}
    {...props}
  />
);
Calendar.displayName = "Calendar";
export { Calendar };
