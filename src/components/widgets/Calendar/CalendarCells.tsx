
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
const CalendarCells: React.FC<CalendarCellsPropsType> = ({
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


  const calendarWeeks = [];

  for (
    let weekStart = startDate;
    weekStart <= endDate;
    weekStart = addDays(weekStart, 7)
  ) {
    const daysInWeek = [];
    if (mode === "Week Numbers") {
      daysInWeek.push(
        <div
          key={`week-${getISOWeek(weekStart)}`}
          className="calendar__week-number text-gray-400 hover:bg-gray-200 border-r border-gray-300"
        >
          {getISOWeek(weekStart)}
        </div>
      );
    }
    for (let i = 0; i < 7; i++) {
      const currentDay = addDays(weekStart, i);
      const isCurrentMonth = isSameMonth(currentDay, monthStart);
      const isSelected =
        selectedDate &&
        isSameDay(currentDay, selectedDate) &&
        mode !== "Range" &&
        mode !== "Double";
      const isInRange =
        range.start &&
        range.end &&
        isWithinInterval(currentDay, { start: range.start, end: range.end });
      const isStartOfRange = range.start && isSameDay(currentDay, range.start);
      const isEndOfRange = range.end && isSameDay(currentDay, range.end);

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
          key={currentDay.toString()}
          className={dayClass}
          onClick={() => {
            if (mode === "Range" || mode === "Double") {
              handleRangeSelection(currentDay);
            } else {
              onSelectDate?.(currentDay);
            }
          }}
        >
          {format(currentDay, "d")}
        </div>
      );
    }
    calendarWeeks.push(
      <div
        key={addDays(weekStart, 7).toString()}
        className={clsx(
          "calendar__days",
          mode === "Week Numbers" ? "grid-cols-8" : "grid-cols-7"
        )}
      >
        {daysInWeek}
      </div>
    );
  }

  return calendarWeeks;
};

export default CalendarCells;
