import React from "react";
import { motion } from "framer-motion";
import {
  redHeart,
  heart,
  litres,
  transmission,
  peopleCapacity,
} from "../../assets/svg-icons";
import { advertSilverCar } from "../../assets/pngs";

const CarCardMainContent = ({
  carData,
  isPopularCar,
  isFavourited,
  motionKey,
  handleButtonClick,
  userId,
}) => {
  return (
    <>
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <p className="font-medium xs:text-xl dark:text-white">
            {carData?.brand} {carData?.model}
          </p>
          <p className="mt-1 text-xs font-semibold text-gray400 xs:text-sm">
            {carData?.body_type}
          </p>
        </div>
        {/* Need to add canEdit here */}
        <motion.div
          key={motionKey}
          className={`${userId ? "flex" : "hidden"}`}
          animate={{ scale: isFavourited ? [1.6, 1] : [1, 1] }}
          transition={{ duration: 0.7 }}
        >
          <img
            width={16}
            height={16}
            src={isFavourited ? redHeart : heart}
            alt="heart button"
            className={`size-4 cursor-pointer self-start xs:size-6 ${
              isFavourited && "heart_animation"
            }`}
            onClick={handleButtonClick}
          />
        </motion.div>
      </div>
      <div
        className={`mt-3 flex justify-between ${
          isPopularCar ? "flex-col" : "sm:flex-col"
        }`}
      >
        <div className="flex w-full justify-center pr-4 sm:px-4 sm:pt-4">
          <img
            src={carData?.car_imgs ? carData.car_imgs[0] : advertSilverCar}
            width={100}
            height={100}
            style={{
              objectFit: "cover",
            }}
            alt="car picture"
            className={`mb-1 ml-0 size-full max-h-[6rem] max-w-[15rem] self-end rounded-xl dark:bg-gray850 sm:max-h-[8rem] sm:max-w-[22rem] sm:self-center ${
              isPopularCar ? "self-center" : "self-end sm:self-center"
            }`}
          />
        </div>
        <div
          className={`flex gap-3 xs:mt-4 sm:mt-6 ${
            isPopularCar
              ? "mt-3 flex-row justify-evenly"
              : "w-1/3 flex-col sm:w-auto sm:flex-row"
          } sm:justify-evenly`}
        >
          <div className="flex">
            <img
              width={14}
              height={14}
              className="size-3.5 xs:size-5"
              src={litres}
              alt="engine literate"
            />
            <p className="ml-1 self-center text-xs text-gray400 xs:ml-1.5 xs:text-sm">
              {carData?.maximum_gasoline}L
            </p>
          </div>
          <div className="flex max-w-[9rem]">
            <img
              width={14}
              height={14}
              src={transmission}
              alt="transmission"
              className="size-3.5 xs:size-5"
            />
            <p className="ml-1 max-w-[5rem] self-center truncate text-xs capitalize text-gray400 xs:text-sm sm:ml-1.5">
              {carData?.transmission_type}
            </p>
          </div>
          <div className="flex">
            <img
              src={peopleCapacity}
              alt="people capacity"
              className="size-3.5 xs:size-5"
              width={14}
              height={14}
            />
            <p className="ml-1 self-center truncate text-xs text-gray400 xs:text-sm sm:ml-1.5">
              {carData?.capacity}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCardMainContent;
