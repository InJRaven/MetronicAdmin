import clsx from "clsx";
import { memo } from "react";

interface CalendarDaysPropsType {
  mode: string;
}
const CalendarDays: React.FC<CalendarDaysPropsType> = memo(({ mode }) => {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  return (
    <div
      className={clsx(
        "calendar__date",
        mode === "Week Numbers" ? "grid-cols-8" : "grid-cols-7"
      )}
    >
      {mode === "Week Numbers" && (
        <div className="calendar__date--item">Wk</div>
      )}
      {days.map((day, index) => (
        <div key={index} className="calendar__date--item">
          {day}
        </div>
      ))}
    </div>
  );
});

export default CalendarDays;
