
import { DigitalClock } from "@widgets";
import * as Popover from "@radix-ui/react-popover";
import React, { useState } from "react";
import { format } from "date-fns";
import { Icons } from "@base";


interface TimePickerPropsType {
  initialTime: Date;
  onTimeChange: (time: Date) => void;
}

const TimePicker: React.FC<TimePickerPropsType> = ({
  initialTime,
  onTimeChange,
}) => {
  const [time, setTime] = useState<Date>(initialTime || new Date());
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <button className="btn gap-[1rem] text-gray-700 bg-transparent text-sm font-medium border border-gray-300 hover:border-gray-300 hover:shadow-light-default cursor-pointer px-[1.2rem] py-[1rem] rounded-[0.6rem]; w-fit" onClick={(e) => e.stopPropagation()}>
          <Icons name="Time" type="Filled"/>
          {format(time,'HH:mm a')}
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={5}
          className="PopoverContent"
        >
          <DigitalClock
            time={initialTime}
            onTimeChange={(newTime: Date) => {
              setTime(newTime);
              onTimeChange(newTime);
            }}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default TimePicker;
