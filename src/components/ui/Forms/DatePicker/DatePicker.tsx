import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@widgets";
import * as Popover from "@radix-ui/react-popover";
import { Icons } from "@base";
// import Icons from "@ui/Base";

interface DatePickerPropsType {
  mode: "Basic" | "Single" | "Week Numbers" | "Range" | "Double";
  selectedDate?: Date;
  onSelectDate?: (date: Date) => void;
  selectedRange?: { start: Date | null; end: Date | null };
  onSelectRange?: (range: { start: Date | null; end: Date | null }) => void;
}
const DatePicker: React.FC<DatePickerPropsType> = ({
  mode,
  selectedDate,
  onSelectDate,
  selectedRange,
  onSelectRange,
}) => {
  const [date, setDate] = useState<Date>(selectedDate || new Date());

  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
    start: selectedRange?.start || null,
    end: selectedRange?.end || null,
  });
  const [isOpen, setIsOpen] = useState(false); 
  const handleRangeSelection = (date: Date) => {
    setRange((prev) => {
      if (!prev.start || prev.end) {
        return { start: date, end: null };
      }
      const start = prev.start < date ? prev.start : date;
      const end = prev.start < date ? date : prev.start;
      const newRange = { start, end };
      onSelectRange?.(newRange);
      return newRange;
    });
  };

  return (
    <Popover.Root  open={isOpen} onOpenChange={setIsOpen} >
      <Popover.Trigger asChild>
        <button className="btn gap-[1rem] text-gray-700 bg-transparent text-sm font-medium border border-gray-300 hover:border-gray-300 hover:shadow-light-default cursor-pointer px-[1.2rem] py-[1rem] rounded-[0.6rem]; w-fit" onClick={(e) => e.stopPropagation()}>
          <Icons 
            name='Calendar'
            type="Filled"
          />
          
          {mode === "Range" || mode === "Double"
            ? range.start && range.end
              ? `${format(range.start, "MMM dd, yyyy")} - ${format(range.end, "MMM dd, yyyy")}`
              : "Select Date Range"
            : format(date, "MMM dd, yyyy")}
          
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="center"
          sideOffset={5}
          className="PopoverContent"
          
        >
          <Calendar
            mode={mode}
            selectedDate={date}
            range={range}
            onSelectDate={(selected) => {
              setDate(selected);
              onSelectDate?.(selected);
            }}
            handleRangeSelection={handleRangeSelection}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default DatePicker;
