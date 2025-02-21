import React, { useState } from "react";
import clsx from "clsx";
import { addMonths } from "date-fns";
import CalendarCells from "./CalendarCells";
import CalendarDays from "./CalendarDays";
import CalendarHeader from "./CalendArHeader";

interface CalendarProps {
  mode: "Basic" | "Single" | "Week Numbers" | "Range" | "Double";
  option?: "Preset" | "Time";
  selectedDate?: Date;
  selectedDates?: Date[];
  selectedRange?: { start: Date | null; end: Date | null };
  onSelectDate?: (date: Date) => void;
  onSelectMultiple?: (dates: Date[]) => void;
  onSelectRange?: (range: { start: Date | null; end: Date | null }) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  mode = "Single",
  selectedDate,
  selectedRange,
  onSelectDate,
  onSelectRange,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const currentYear = new Date().getFullYear();
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
    start: selectedRange?.start || null,
    end: selectedRange?.end || null,
  });

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

  const renderCalendarView = (
    month: Date,
    disabledButtonPrev: boolean = false,
    disabledButtonNext: boolean = false
  ) => (
    <>
      <CalendarHeader
        month={month}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        currentYear={currentYear}
        disabledButtonPrev={disabledButtonPrev}
        disabledButtonNext={disabledButtonNext}
      />
      <div className="calendar__body">
        <CalendarDays mode={mode} />
        <CalendarCells
          month={month}
          mode={mode}
          range={range}
          selectedDate={selectedDate}
          onSelectDate={onSelectDate}
          handleRangeSelection={handleRangeSelection}
        />
      </div>
    </>
  );
  return (
    <div
      className={clsx("calendar", mode === "Double" && "double", "max-w-fit")}
    >
      {mode === "Double" ? (
        <>
          <div>{renderCalendarView(currentMonth, false, true)}</div>
          <div>
            {renderCalendarView(addMonths(currentMonth, 1), true, false)}
          </div>
        </>
      ) : (
        renderCalendarView(currentMonth)
      )}
    </div>
  );
};

export default Calendar;
