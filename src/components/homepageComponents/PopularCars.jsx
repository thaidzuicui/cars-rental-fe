import React from "react";
import { motion } from "framer-motion";
import { addDays } from "date-fns";
import { useNavigate } from "react-router-dom";

import CarCard from "../carCardComponents/CarCard";

const PopularCars = ({ popularCars, userId }) => {
  const navigate = useNavigate();
  const twoDaysFromNow = addDays(new Date(), 2);
  const fiveDaysFromNow = addDays(new Date(), 5);
  return (
    <motion.div
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      className="flex w-full flex-col"
    >
      <div className="mt-11 flex w-full justify-between px-6 xl:px-[4.94rem]">
        <p className="font-medium text-gray400">Popular Cars</p>
        <p
          className="cursor-pointer font-medium text-blue500"
          onClick={() => navigate("/search")}
        >
          View All
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 xl:px-[3.75rem]">
        {popularCars?.slice(0, 4).map((car) => (
          <CarCard
            carData={car}
            key={car.car_id}
            isPopularCar={true}
            availabilityFrom={twoDaysFromNow}
            availabilityTo={fiveDaysFromNow}
            hasLiked={car.likes?.some((like) => like === userId)}
          />
        ))}
      </div>
      <button
        className="hover-effect my-10 max-w-[14.25rem] self-center rounded-[0.625rem] bg-blue500 px-10 py-4 text-sm font-medium text-white"
        onClick={() => navigate("/search")}
      >
        Show More Cars
      </button>
    </motion.div>
  );
};

export default PopularCars;
