import React, { useState } from "react";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";
import "@geoapify/geocoder-autocomplete/styles/round-borders.css";
import { addDays } from "date-fns";

import { Card, CardContent } from "./ui/card";
import { ellipse, search } from "../assets/svg-icons";
import Location from "./Location";
import AvailabilityFromTo from "./AvailabilityFromTo";
import { parseLocalStorageDate } from "../lib/utils";

const PickUpDropOffCard = () => {
  const locate = useLocation();
  const [location, setLocation] = useState("");
  const [date, setDate] = useState();
  const twoDaysFromNow = addDays(new Date(), 2);
  const fiveDaysFromNow = addDays(new Date(), 5);
  const handleUserInput = (input) => {
    setLocation(input);
    localStorage.setItem("location", input);
  };

  const availabilityFrom = parseLocalStorageDate(
    "availabilityFrom",
    twoDaysFromNow
  );
  const availabilityTo = parseLocalStorageDate(
    "availabilityTo",
    fiveDaysFromNow
  );

  const handleSelectedDate = (selectedDate) => {
    setDate(selectedDate);
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem(
        "availabilityFrom",
        JSON.stringify(selectedDate?.from)
      );
      window.localStorage.setItem(
        "availabilityTo",
        JSON.stringify(selectedDate?.to)
      );
    }
  };
  const isSearchPage = locate.pathname === "/search";
  const searchPageDiv = isSearchPage ? "xl:px-7" : "xl:px-6";
  const searchPageLocation = isSearchPage && "xl:max-w-[17rem] 2xl:max-w-none";
  const searchPageButton = isSearchPage
    ? "h-14 w-[3.75rem] xl:flex hidden"
    : "flex h-12 grow flex-row gap-[0.38rem] xl:h-14 xl:max-w-[10rem]";
  return (
    <motion.div
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      className={`flex w-full flex-col gap-5 dark:text-white0 xl:mx-0 xl:max-w-none xl:flex-row xl:gap-4 xl:rounded-[0.625rem] xl:bg-white0 dark:xl:bg-gray850 ${searchPageDiv}`}
    >
      <Card className="border-0 bg-none shadow-none xl:shrink-0 xl:grow">
        <CardContent
          className={`flex flex-col gap-[1.38rem] rounded-[0.625rem] bg-white0 px-3 pb-[1.56rem] pt-[1.44rem] dark:bg-gray850 xl:flex-row xl:gap-4 xl:px-0 xl:py-6`}
        >
          <div className={`flex flex-col gap-3 xl:grow ${searchPageLocation}`}>
            <div className="flex flex-row items-center gap-2">
              <div className="flex size-[16px] items-center justify-center rounded-[4.375rem] bg-blue450">
                <img src={ellipse} width={8} height={8} alt="Ellipse" />
              </div>
              <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Location
              </div>
            </div>
            <Location
              onUserInput={handleUserInput}
              searchLocation={
                typeof window !== "undefined" && window.localStorage
                  ? window.localStorage.getItem("location")
                  : undefined
              }
            />
          </div>
          <AvailabilityFromTo
            onSelectedDate={handleSelectedDate}
            availabilityFrom={availabilityFrom}
            availabilityTo={availabilityTo}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PickUpDropOffCard;
