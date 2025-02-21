import clsx from "clsx";
import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  getISOWeek,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  startOfMonth,
  startOfWeek,
} from "date-fns";

interface CalendarCellsPropsType {
  month: Date;
  mode: string;
  range: { start: Date | null; end: Date | null };
  selectedDate?: Date;
  onSelectDate?: (date: Date) => void;
  handleRangeSelection: (date: Date) => void;
}
const CalendarCells: React.FC<CalendarCellsPropsType>  = ({
  month,
  mode,
  range,
  selectedDate,
  onSelectDate,
  handleRangeSelection,
}) => {
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

      const dayClass = clsx("calendar__days--item", {
        "text-gray-400": !isCurrentMonth,
        "text-gray-900": isCurrentMonth,
        "!bg-primary text-white": isSelected,
        calendar__range: isInRange && isCurrentMonth,
        "hover:bg-gray-200": !isInRange,
        "start-range": isStartOfRange,
        "end-range": isEndOfRange,
      });
      daysInWeek.push(
        <div
          key={day.toString()}
          className={dayClass}
          onClick={() => {
            if (mode === "Range" || mode === "Double") {
              handleRangeSelection(cloneDay);
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

export default CalendarCells;
