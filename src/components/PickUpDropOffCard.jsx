import React from "react";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";

import { Card, CardContent } from "./ui/card";

const PickUpDropOffCard = () => {
  const location = useLocation();

  const isSearchPage = location.pathname === "/search";
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
            <div className="flex flex-row items-center gap-2">Location</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PickUpDropOffCard;
