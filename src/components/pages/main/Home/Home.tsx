import { useState } from "react";
// @ts-expect-error: '@ui'
import { DatePicker, TimePicker, Rating, Icons } from "@ui";


const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedRange, setSelectedRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({
    start: null,
    end: null,
  });

  const [time, setTime] = useState<Date>();

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
      <h2 className="text-base text-warning">
        Selected Date: {selectedDate ? selectedDate.toDateString() : "None"}
      </h2>

      <TimePicker initialTime={time} onTimeChange={setTime} />
      <i className="ki-chart-line-star ki-filled text-2xl" />
      <Rating
        totalStar={10}
        initialRating={3.5}
        isHalf={true}
        precision={0.5}
      />

          <Icons name="YouTube" type="Filled" className="text-b-20-20-semibold"/>
      
    </>
  );
};
export default Home;
