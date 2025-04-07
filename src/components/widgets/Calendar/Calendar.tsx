import React, { useState } from "react";
import clsx from "clsx";
import { addMonths } from "date-fns";
import CalendarCells from "./CalendarCells";
import CalendarDays from "./CalendarDays";
import CalendarHeader from "./CalendarHeader";

interface CalendarProps {
  mode: "Basic" | "Single" | "Week Numbers" | "Range" | "Double";
  option?: "Preset" | "Time";
  selectedDate?: Date;
  selectedDates?: Date[];
  onSelectDate?: (date: Date) => void;
  range: { start: Date | null; end: Date | null };
  handleRangeSelection: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  mode = "Single",
  selectedDate,
  onSelectDate,
  range,
  handleRangeSelection
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const currentYear = new Date().getFullYear();

  

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
