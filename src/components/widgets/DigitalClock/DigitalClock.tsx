import { format, addHours, addMinutes, setHours, setMinutes } from "date-fns";
import { useState } from "react";

interface DigitalClockPropsType {
  time: Date;
  onTimeChange: (time: Date) => void;
}

const DigitalClock: React.FC<DigitalClockPropsType> = ({
  time = new Date(),
  onTimeChange,
}) => {
  const [hourInput, setHourInput] = useState<string>(
    time.getHours().toString()
  );
  const [minuteInput, setMinuteInput] = useState<string>(
    time.getMinutes().toString()
  );

  const handleTimeChange = (type: "hour" | "minute", amount: number) => {
    const newTime =
      type === "hour"
        ? addHours(new Date(time), amount)
        : addMinutes(new Date(time), amount);
    onTimeChange(newTime);
    setHourInput(newTime.getHours().toString());
    setMinuteInput(newTime.getMinutes().toString());
  };

  const handleInputChange = (
    type: "hour" | "minute",
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/^0+/, "");
    if (type === "hour") setHourInput(value);
    else setMinuteInput(value);
  };

  const handleInputBlur = (type: "hour" | "minute") => {
    const newTime = new Date(time);
    if (type === "hour") {
      const newHour = Math.min(23, Math.max(0, Number(hourInput)));
      onTimeChange(setHours(newTime, newHour));
    } else {
      const newMinute = Math.min(59, Math.max(0, Number(minuteInput)));
      onTimeChange(setMinutes(newTime, newMinute));
    }
  };

  return (
    <div className="digital-clock">
      {/* {Start: Hours} */}
      <div className="digital-clock__group col-start-1 col-end-2 row-start-1 row-end-2">
        <button
          className="item__button"
          onClick={() => handleTimeChange("hour", 1)}
        >
          <i className="ki-filled ki-arrow-up tesxt-base" />
        </button>
        <input
          type="number"
          value={hourInput}
          onChange={(e) => handleInputChange("hour", e)}
          onBlur={() => handleInputBlur("hour")}
          className="item__input"
          min={0}
          max={23}
          step={1}
        />
        <button
          className="item__button"
          onClick={() => handleTimeChange("hour", -1)}
        >
          <i className="ki-filled ki-arrow-down tesxt-base" />
        </button>
      </div>
      {/* {END: Hours} */}

      <div className="col-start-2 flex justify-center items-center col-end-3 row-start-1 row-end-2">
        <span className="text-gray-900 text-base transition-colors duration-200">
          :
        </span>
      </div>

      {/* {Start: Minute} */}
      <div className="digital-clock__group col-start-3 col-end-4 row-start-1 row-end-2 ">
        <button
          className="item__button"
          onClick={() => handleTimeChange("minute", 1)}
        >
          <i className="ki-filled ki-arrow-up tesxt-base" />
        </button>
        <input
          type="number"
          value={minuteInput}
          onChange={(e) => handleInputChange("minute", e)}
          onBlur={() => handleInputBlur("minute")}
          className="item__input"
          min={0}
          max={59}
          step={1}
        />
        <button
          className="item__button"
          onClick={() => handleTimeChange("minute", -1)}
        >
          <i className="ki-filled ki-arrow-down tesxt-base" />
        </button>
      </div>
      {/* {END: Minute} */}

      <div className="flex justify-center items-center col-start-5 col-end-6 row-start-1 row-end-2">
        <span className="h-[4rem] text-light dark:text-gray-900 text-b-13-14-medium flex items-center justify-center p-[1rem] rounded-[0.6rem] bg-primary transition-colors duration-200 select-none">
          {format(time, "a")}
        </span>
      </div>
    </div>
  );
};

export default DigitalClock;
