import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { format, addDays } from "date-fns";
import { useNavigate } from "react-router-dom";

import SelectYourTime from "../searchFormComponents/SelectYourTime";
import { cn } from "../../lib/utils";
import { Calendar } from "../ui/calendar";
import { cross, calendar, whiteCross, ellipse } from "../../assets/svg-icons";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import ArrowDown from "../ArrowDown";
import { calculateDaysBetweenDates } from "../../lib/utils";

const CarDetailModalTwo = ({ carData, setShowModal }) => {
  const navigate = useNavigate();
  const today = new Date();
  const twoDaysFromNow = addDays(today, 2);
  const [errorMessage, setErrorMessage] = useState("");
  const [date, setDate] = useState({
    from: twoDaysFromNow,
    to: addDays(twoDaysFromNow, 3),
  });

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || false
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsDarkMode(localStorage.getItem("theme") === "dark");
    };

    // Lắng nghe sự thay đổi trong localStorage
    window.addEventListener("storage", handleStorageChange);

    return () => {
      // Cleanup listener khi component bị unmount
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const daysRented = calculateDaysBetweenDates(date?.from, date?.to);

  const handleRentNow = () => {
    if (!date?.from || !date?.to) {
      setErrorMessage("Required");
      return;
    }

    navigate(
      `/checkout?price=${
        carData.price1day && carData?.price1day?.replace(".", "")
      }&totalDays=${daysRented}&date=${JSON.stringify(date)}&id=${
        carData.car_id
      }`
    );
  };

  return (
    <motion.section
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      className="w-full flex-1 flex-col self-center py-6 xs:min-w-[22rem] sm:w-[31.25rem] sm:p-2"
    >
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <p className="text-xl font-semibold text-gray900 dark:text-white">
            Add Pickup & Drop-Off Info
          </p>
          <p className="mt-2.5 text-sm text-gray400">Please enter your info</p>
        </div>
        <img
          src={isDarkMode ? whiteCross : cross}
          alt="close modal"
          onClick={() => setShowModal(false)}
          className="flex size-6 -translate-y-6 cursor-pointer self-start sm:size-8 sm:-translate-y-0"
        />
      </div>
      <div className="mb-3 mt-[1.88rem] flex flex-row items-center gap-2">
        <div className="flex size-[17px] items-center justify-center rounded-[4.375rem] bg-blue450">
          <img src={ellipse} alt="Ellipe" height={8} width={8} />
        </div>
        <p className="font-medium text-gray900 dark:text-white">
          Pick-Up Location
        </p>
      </div>
      <input
        disabled={true}
        type="text"
        value={carData.location}
        className="geoapify-autocomplete-input"
      />
      <div className="mt-6 flex flex-row gap-3 xl:grow xl:gap-4">
        <Popover>
          <div className={`flex w-full flex-col gap-3.5`}>
            <div className="flex flex-row">
              <div className="flex flex-row items-center gap-[0.38rem] dark:text-white200">
                <img src={calendar} width={14} height={14} alt="calendar" />
                Pick-Up Date
                {errorMessage && (
                  <span className="rounded-[0.625rem] bg-red-50 px-3 text-sm text-red-600">
                    {errorMessage}
                  </span>
                )}
              </div>
            </div>

            <PopoverTrigger asChild id="Pick-Up Date">
              <Button
                variant={"outline"}
                className={cn(
                  "bg-white200 dark:bg-gray800 h-[2.875rem] sm:h-[3.5rem] w-full justify-between border-0 text-left font-normal py-[0.69rem] px-[0.62rem] xl:pl-[1.13rem] xl:h-14 dark:text-white200",
                  !date && "text-muted-foreground",
                  errorMessage && "!border !border-red-600"
                )}
              >
                {date?.from ? (
                  format(date.from, "LLL dd, y")
                ) : (
                  <>
                    <span className="text-[0.625rem] font-normal leading-5 text-gray-400 ">
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
              mode={"range"}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <SelectYourTime pickUpOrDropOff={"Pick-Up Time"} />
      </div>

      <div className="mt-6 flex flex-row gap-3 xl:grow xl:gap-4">
        <Popover>
          <div className={`flex w-full flex-col gap-3.5`}>
            <div className="flex flex-row">
              <div className="flex flex-row items-center gap-[0.38rem] dark:text-white200">
                <img src={calendar} width={14} height={14} alt="calendar" />
                Drop-Off Date
                {errorMessage && (
                  <span className="rounded-[0.625rem] bg-red-50 px-3 text-sm text-red-600">
                    {errorMessage}
                  </span>
                )}
              </div>
            </div>

            <PopoverTrigger asChild id="Drop-Off Date">
              <Button
                variant={"outline"}
                className={cn(
                  "bg-white200 dark:bg-gray800 h-[2.875rem] sm:h-[3.5rem] w-full justify-between border-0 text-left font-normal py-[0.69rem] px-[0.62rem] xl:pl-[1.13rem] xl:h-14 dark:text-white200",
                  !date && "text-muted-foreground",
                  errorMessage && "!border !border-red-600"
                )}
              >
                {date?.to ? (
                  format(date.to, "LLL dd, y")
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
              mode={"range"}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <SelectYourTime pickUpOrDropOff={"Drop-Off Time"} />
      </div>
      <button
        onClick={handleRentNow}
        className="hover-effect mt-7 w-full rounded-xl bg-blue500 py-4 font-semibold text-white"
      >
        Rent Now
      </button>
    </motion.section>
  );
};

export default CarDetailModalTwo;
