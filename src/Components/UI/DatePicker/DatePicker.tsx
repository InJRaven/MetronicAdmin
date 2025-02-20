import { useState } from "react";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../Calendar/Calendar";

interface DatePickerType {
  className?: string;
}

const DatePicker: React.FC<DatePickerType> = ({ className }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative flex" onClick={() => setIsOpen(!isOpen)}>
      <button className="btn gap-[1rem] text-gray-700 bg-transparent text-sm font-medium border border-gray-300 hover:border-gray-300 hover:shadow-light-default cursor-pointer px-[1.2rem] py-[1rem] rounded-[0.6rem];">
        <i className="ki-filled ki-calendar" />
        {format(selectedDate, "MMM dd, yyyy")}
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 z-50 bg-white transition-transform duration-300 scale-95 w-fit h-fit">
          <Calendar
            selectedDate={selectedDate}
            onSelectDate={(date) => {
              setSelectedDate(date);
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
