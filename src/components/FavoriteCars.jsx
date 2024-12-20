import React, { useState } from "react";
import { addDays } from "date-fns";

import CarCard from "./carCardComponents/CarCard";

const FavoriteCars = ({ favoriteCars, userId }) => {
  const [showMore, setShowMore] = useState(false);
  const twoDaysFromNow = addDays(new Date(), 2);
  const fiveDaysFromNow = addDays(new Date(), 5);
  return (
    <>
      <div className="flex w-full justify-between">
        <p className="mt-10 font-medium text-gray400">My Favorite Cars</p>
        {favoriteCars?.length > 4 && (
          <button
            className="mt-10 cursor-pointer font-medium text-gray400"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "See Less" : "See More"}
          </button>
        )}
      </div>

      <section className="mt-7 flex flex-col items-center gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showMore && favoriteCars?.length > 0
          ? favoriteCars.map((car) => (
              <CarCard
                carData={car}
                key={car.car_id}
                availabilityFrom={twoDaysFromNow}
                availabilityTo={fiveDaysFromNow}
                hasLiked={car.likes?.some((like) => like === userId)}
              />
            ))
          : favoriteCars
              ?.slice(0, 4)
              .map((car) => (
                <CarCard
                  carData={car}
                  key={car.car_id}
                  availabilityFrom={twoDaysFromNow}
                  availabilityTo={fiveDaysFromNow}
                  hasLiked={car.likes?.some((like) => like === userId)}
                />
              ))}
      </section>
    </>
  );
};

export default FavoriteCars;
