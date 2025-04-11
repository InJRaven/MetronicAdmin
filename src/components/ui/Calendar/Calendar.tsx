import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { DayPicker } from "react-day-picker";

type CalendarProps = ComponentProps<typeof DayPicker>;
const Calendar = ({
  //   mode = "single",
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => (
  <DayPicker
    showOutsideDays={showOutsideDays}
    className={cn("calendar-wrapper", className)}
    classNames={{
      months: "calendar",
      month: "calendar__month",
      month_caption: "calendar__header",
      month_grid: "calendar__body",
      weekdays: "weekdays",
      week_number_header:'week_number_header',
      week_number: "week__number",
      weekday: "weekdays__item",
      weeks: "weeks",
      week: "weeks__item",
      day: "day",
      day_button: "weeks__item--button",
      outside: "outsite",
      range_start: "day-range-start",
      range_middle: "day-range-middle",
      range_end: "day-range-end",
      nav: "calendar__navigation",
      today: "today",
      selected: "selected",
      button_previous: "absolute top-[1rem] left-[1rem]",
      button_next: "absolute top-[1rem] right-[1rem]",
      footer: "calendar__footer",
      ...classNames,
    }}
    {...props}
  />
);
Calendar.displayName = "Calendar";
export { Calendar };
