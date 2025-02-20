import React, { useState } from "react";
import clsx from "clsx";
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameMonth,
  isSameDay,
  isWithinInterval,
  getISOWeek,
} from "date-fns";

interface CalendarProps {
  mode: "Single" | "Week Numbers" | "Range" | "Double";
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
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
    start: selectedRange?.start || null,
    end: selectedRange?.end || null,
  });
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const handleMonthChange = (direction: "prev" | "next") =>
    setCurrentMonth((prev) =>
      direction === "prev" ? subMonths(prev, 1) : addMonths(prev, 1)
    );

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

  const renderDays = () => (
    <>
      {mode === "Week Numbers" && (
        <div className="calendar__date--item">Wk</div>
      )}
      {days.map((day, index) => (
        <div key={index} className="calendar__date--item">
          {day}
        </div>
      ))}
    </>
  );

  const renderCells = (month: Date) => {
    const monthStart = startOfMonth(month);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    let day = startDate;
    const weeks = [];

    while (day <= endDate) {
      const daysInWeek = [];
      if (mode === "Week Numbers") {
        daysInWeek.push(
          <div
            key={`week-${getISOWeek(day)}`}
            className="calendar__week-number text-gray-400 hover:bg-gray-200 border-r border-gray-300"
          >
            {getISOWeek(day)}
          </div>
        );
      }
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isSelected = isSameDay(day, selectedDate);
        const isInRange =
          range.start &&
          range.end &&
          isWithinInterval(day, { start: range.start, end: range.end });
        const isStartOfRange = range.start && isSameDay(day, range.start);
        const isEndOfRange = range.end && isSameDay(day, range.end);

        const dayClass = clsx(
          "calendar__days--item",
          {
            "text-gray-400": !isCurrentMonth, 
            "text-gray-900": isCurrentMonth, 
            "!bg-primary text-white": isSelected, 
            calendar__range: isInRange && isCurrentMonth, 
            "hover:bg-gray-200": !isInRange, 
            "start-range": isStartOfRange, 
            "end-range": isEndOfRange, 
          }
        );
        daysInWeek.push(
          <div
            key={day.toString()}
            className={dayClass}
            onClick={() => {
              if (mode === "Range" || mode === "Double") {
                handleRangeSelection(cloneDay); // Khi ở chế độ Double, tiếp tục chọn ngày trong dải ngày
              } else {
                onSelectDate?.(cloneDay);
              }
            }}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      weeks.push(
        <div
          key={day.toString()}
          className={clsx(
            "calendar__days",
            mode === "Week Numbers" ? "grid-cols-8" : "grid-cols-7"
          )}
        >
          {daysInWeek}
        </div>
      );
    }

    return weeks;
  };

  const renderCalendarView = (month: Date, disabledButtonPrev: boolean = false, disabledButtonNext: boolean = false) => (
    <>
      <div className="calendar__header">
        <button
          className={clsx("calendar__navigation", {disabled: disabledButtonPrev})}
          onClick={() => handleMonthChange("prev")}
        >
          <i className="ki-filled ki-left" />
        </button>
        <span className="text-b-13-14-medium text-gray-900">
          {format(month, "MMMM yyyy")}
        </span>
        <button
          className={clsx("calendar__navigation", {disabled: disabledButtonNext})}
          onClick={() => handleMonthChange("next")}
        >
          <i className="ki-filled ki-right" />
        </button>
      </div>
      <div className="calendar__body">
        <div
          className={clsx(
            "calendar__date",
            mode === "Week Numbers" ? "grid-cols-8" : "grid-cols-7"
          )}
        >
          {renderDays()}
        </div>
        {renderCells(month)}
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
          <div>{renderCalendarView(addMonths(currentMonth, 1),true, false)}</div>
        </>
      ) : (
        renderCalendarView(currentMonth)
      )}
    </div>
  );
};

export default Calendar;
