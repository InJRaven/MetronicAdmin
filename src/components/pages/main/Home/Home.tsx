import { useState } from "react";
import { DatePicker } from "@/components/ui";


const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedRange, setSelectedRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({
    start: null,
    end: null,
  });
  return (
    <>
      <DatePicker
        mode="Range"
        selectedRange={selectedRange}
        onSelectRange={setSelectedRange}
      />
      <h2 className="text-base">
        Selected Range:{" "}
        {selectedRange.start && selectedRange.end
          ? `${selectedRange.start.toDateString()} - ${selectedRange.end.toDateString()}`
          : "None"}
      </h2>

      <DatePicker
        mode="Single"
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />
      <h2 className="text-base">
        Selected Date: {selectedDate ? selectedDate.toDateString() : "None"}
      </h2>
    </>
  );
};
export default Home;
