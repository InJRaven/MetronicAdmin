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

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const handleRangeSelection = (date: Date) => {
    
    if (!range.start || (range.start && range.end)) {
      setRange({ start: date, end: null });
    } else {
      setRange({ start: range.start, end: date });
      onSelectRange?.({ start: range.start, end: date });
    }
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
          "calendar__days--item", // Base class cho tất cả các ngày
          {
            "text-gray-400": !isCurrentMonth, // nếu không phải tháng hiện tại
            "text-gray-900": isCurrentMonth, // nếu là tháng hiện tại
            "!bg-primary text-white": isSelected, // nếu ngày được chọn
            calendar__range: isInRange && isCurrentMonth, // nếu nằm trong dải ngày
            "hover:bg-gray-200": !isInRange, // nếu không nằm trong dải ngày
            "start-range": isStartOfRange, // nếu là ngày bắt đầu của dải ngày
            "end-range": isEndOfRange, // nếu là ngày kết thúc của dải ngày
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
          className={`calendar__days ${
            mode === "Week Numbers" ? "grid-cols-8" : "grid-cols-7"
          }`}
        >
          {daysInWeek}
        </div>
      );
    }

    return <div className="calender__cell">{weeks}</div>;
  };

  const renderDoubleMode = () => {
    const firstMonth = currentMonth;
    const secondMonth = addMonths(currentMonth, 1);
    return (
      <>
        <div className="calendar__month">
          <div className="calendar__header">
            <button className="calendar__navigation" onClick={handlePrevMonth}>
              <i className="ki-filled ki-left" />
            </button>
            <span className="text-b-13-14-medium text-gray-900">
              {format(firstMonth, "MMMM yyyy")}
            </span>
            <button
              disabled
              className="calendar__navigation !bg-transparent pointer-events-none"
            >
              <i className="ki-filled ki-right !hidden" />
            </button>
          </div>
          <div className="calendar__body">
            <div
              className={`calendar__date ${
                mode === "Week Numbers" ? "grid-cols-8" : "grid-cols-7"
              }`}
            >
              {renderDays()}
            </div>
            {renderCells(firstMonth)}
          </div>
        </div>
        <div className="calendar__month">
          <div className="calendar__header">
            <button
              disabled
              className="calendar__navigation !bg-transparent !pointer-events-none"
            >
              <i className="ki-filled ki-left !hidden" />
            </button>
            <span className="text-b-13-14-medium text-gray-900">
              {format(secondMonth, "MMMM yyyy")}
            </span>
            <button onClick={handleNextMonth} className="calendar__navigation">
              <i className="ki-filled ki-right" />
            </button>
          </div>
          <div className="calendar__body">
            <div
              className={`calendar__date ${
                mode === "Week Numbers" ? "grid-cols-8" : "grid-cols-7"
              }`}
            >
              {renderDays()}
            </div>
            {renderCells(secondMonth)}
          </div>
        </div>
      </>
    );
  };

  const renderAnotherMode = () => {
    return (
      <>
        <div className="calendar__header">
          <button className="calendar__navigation" onClick={handlePrevMonth}>
            <i className="ki-filled ki-left" />
          </button>
          <span className="text-b-13-14-medium text-gray-900">
            {format(currentMonth, "MMMM yyyy")}
          </span>
          <button className="calendar__navigation" onClick={handleNextMonth}>
            <i className="ki-filled ki-right" />
          </button>
        </div>
        <div className="calendar__body">
          <div
            className={`calendar__date ${
              mode === "Week Numbers" ? "grid-cols-8" : "grid-cols-7"
            }`}
          >
            {renderDays()}
          </div>
          {renderCells(currentMonth)}
        </div>
      </>
    );
  };

  return (
    <div
      className={clsx("calendar", { double: mode === "Double" }, "max-w-fit")}
    >
      {mode === "Double" ? renderDoubleMode() : renderAnotherMode()}
    </div>
  );
};

export default Calendar;
