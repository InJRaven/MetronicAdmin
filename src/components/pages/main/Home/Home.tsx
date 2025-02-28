import { useState } from "react";
// @ts-expect-error: '@ui'
import { DatePicker, TimePicker } from "@ui";
// @ts-expect-error: '@widgets' 
import { DigitalClock } from "@widgets";



const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedRange, setSelectedRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({
    start: null,
    end: null,
  });


  const [time, setTime] = useState<Date>()
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


      <TimePicker initialTime={time} onTimeChange ={setTime}/>
      <DigitalClock />
    </>
  );
};
export default Home;
