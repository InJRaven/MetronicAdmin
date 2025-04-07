// CalendarHeader.tsx
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { format, setYear, addMonths } from "date-fns";

interface CalendarHeaderProps {
  month: Date;
  currentMonth: Date;
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
  currentYear: number;
  disabledButtonPrev?: boolean;
  disabledButtonNext?: boolean;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  month,
  currentMonth,
  setCurrentMonth,
  currentYear,
  disabledButtonPrev = false,
  disabledButtonNext = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditingYear, setIsEditingYear] = useState(false);
  const [yearInput, setYearInput] = useState(format(currentMonth, "yyyy"));

  const handleMonthChange = (direction: "prev" | "next") => {
    setCurrentMonth((prev) => addMonths(prev, direction === "prev" ? -1 : 1));
  };

  const handleYearUpdate = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if ("key" in e && e.key !== "Enter") return;
    const inputYear = Math.max(
      1900,
      Math.min(currentYear, Number((e.target as HTMLInputElement).value))
    );
    setCurrentMonth(setYear(currentMonth, inputYear));
    setIsEditingYear(false);
  };

  useEffect(() => {
    if (isEditingYear && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditingYear]);

  return (
    <div className="calendar__header">
      <button
        className={clsx("calendar__navigation", {
          disabled: disabledButtonPrev,
        })}
        onClick={() => handleMonthChange("prev")}
        disabled={disabledButtonPrev}
      >
        <i className="ki-filled ki-left" />
      </button>
      <div
        className="flex items-center justify-center gap-2 cursor-pointer"
        onClick={() => setIsEditingYear(true)}
      >
        {isEditingYear ? (
          <>
            <span className="text-b-14-14-medium text-gray-900 select-none">
              Year:
            </span>
            <input
              type="number"
              value={yearInput}
              onChange={(e) => setYearInput(e.target.value)}
              className="text-b-14-14-medium text-gray-900 max-w-fit text-center border border-transparent focus:border-gray-300 rounded-md"
              min="1900"
              ref={inputRef}
              max={currentYear}
              onKeyDown={handleYearUpdate}
              onBlur={() => setIsEditingYear(false)}
            />
          </>
        ) : (
          <span className="text-b-14-14-medium text-gray-900">
            {format(month, "MMMM yyyy")}
          </span>
        )}
      </div>
      <button
        className={clsx("calendar__navigation", {
          disabled: disabledButtonNext,
        })}
        onClick={() => handleMonthChange("next")}
        disabled={disabledButtonNext}
      >
        <i className="ki-filled ki-right" />
      </button>
    </div>
  );
};

export default CalendarHeader;
