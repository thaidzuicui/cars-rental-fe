import React, { useState } from "react";
import { addYears, format } from "date-fns";
// import { DateRange } from "react-day-picker";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { calendar } from "../assets/svg-icons";
import ArrowDown from "./ArrowDown";
import { cn } from "../lib/utils";

const AvailabilityFromTo = ({
  onSelectedDate,
  availabilityFrom,
  availabilityTo,
}) => {
  const [date, setDate] = useState({
    from: availabilityFrom || undefined,
    to: availabilityTo || undefined,
  });

  // When a user click on a date, this function will be called
  const handleOnSelectedDate = (date) => {
    setDate(date);
    onSelectedDate(date);
  };

  return (
    <>
      <div className="flex flex-row gap-3 xl:grow xl:gap-4">
        <Popover>
          <div className="flex w-full flex-col gap-3.5">
            <div className="flex flex-row">
              <div className="flex flex-row items-center gap-[0.38rem]">
                <img src={calendar} width={14} height={14} alt="calendar" />
                <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Availability from
                </div>
              </div>
            </div>
            <PopoverTrigger asChild id="availabilityFrom">
              <Button
                variant={"outline"}
                className={cn(
                  "bg-white200 dark:bg-gray800 rounded-[0.375rem] w-full h-[2.875rem] sm:h-[3.5rem] justify-between border-0 text-left font-normal py-[0.69rem] pl-4 pr-[1.13rem] xl:px-5 xl:h-14",
                  !date && "text-muted-foreground"
                )}
              >
                {availabilityFrom ? (
                  format(availabilityFrom, "LLL dd, y")
                ) : (
                  <>
                    <span className="text-[0.625rem] font-normal leading-5 text-gray-400">
                      Select your date
                    </span>
                    <ArrowDown />
                  </>
                )}
              </Button>
            </PopoverTrigger>
          </div>
          <PopoverContent avoidCollisions={false} className="w-auto p-0">
            <Calendar
              fromDate={new Date()}
              toDate={addYears(new Date(), 1)}
              mode={"range"}
              selected={date}
              onSelect={(newDate) => {
                handleOnSelectedDate(newDate);
              }}
              numberOfMonths={2}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-row gap-3 xl:grow xl:gap-4">
        <Popover>
          <div className="flex w-full flex-col gap-3.5">
            <div className="flex flex-row">
              <div className="flex flex-row items-center gap-[0.38rem]">
                <img src={calendar} width={14} height={14} alt="calender" />
                <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Availability to
                </div>
              </div>
            </div>
            <PopoverTrigger asChild id="availabilityTo">
              <Button
                variant={"outline"}
                className={cn(
                  "bg-white200 w-full dark:bg-gray800 rounded-[0.375rem] h-[2.875rem] sm:h-[3.5rem] justify-between border-0 text-left font-normal py-[0.69rem] xl:px-5 pl-4 pr-[1.13rem] xl:h-14",
                  !date && "text-muted-foreground"
                )}
              >
                {availabilityTo ? (
                  format(availabilityTo, "LLL dd, y")
                ) : (
                  <>
                    <span className="text-[0.625rem] font-normal leading-5 text-gray-400">
                      Select your date
                    </span>
                    <ArrowDown />
                  </>
                )}
              </Button>
            </PopoverTrigger>
          </div>
          <PopoverContent className="w-auto p-0">
            <Calendar
              fromDate={new Date()}
              toDate={addYears(new Date(), 1)}
              mode={"range"}
              selected={date}
              onSelect={(newDate) => {
                handleOnSelectedDate(newDate);
              }}
              numberOfMonths={2}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default AvailabilityFromTo;
