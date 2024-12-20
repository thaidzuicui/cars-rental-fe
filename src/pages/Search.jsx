import React from "react";
import { useSearchParams } from "react-router-dom";

import PickUpDropOffCard from "../components/PickUpDropOffCard";
import { useAuth } from "../context/AuthContext";
import useCurrentUser from "../queries/useCurrentUser";
import CarCard from "../components/carCardComponents/CarCard";
import useAllCars from "../queries/useAllCars";
import Loader from "../components/Loader";

const Search = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const availabilityFrom = new Date(searchParams.get("from"));
  const availabilityTo = new Date(searchParams.get("to"));

  console.log();

  const { hasToken } = useAuth();
  const { data: currentUser } = useCurrentUser(hasToken);
  const { isLoading, data: allCars } = useAllCars();

  // Lọc các xe có rentals không nằm trong khoảng availabilityFrom và availabilityTo
  const availableCars = allCars?.filter((car) => {
    return car.bookings.every((booking) => {
      const rentalFrom = new Date(booking.rental_date);
      const rentalTo = new Date(booking.return_date);

      // Kiểm tra nếu khoảng thời gian rental không giao nhau với availabilityFrom và availabilityTo
      return rentalTo < availabilityFrom || rentalFrom > availabilityTo;
    });
  });

  return (
    <>
      {isLoading && <Loader />}
      <div className="flex grow flex-col bg-white200 px-20 pb-[3.75rem] pt-[7rem]  dark:bg-gray950 sm:pb-0">
        <PickUpDropOffCard />
        <div
          className="mt-[3.75rem] mb-[3.75rem] grid grid-rows-1 gap-5 xs:flex-col xs:items-center xs:justify-center sm:grid-cols-2 md:mt-9 
            md:gap-8 xl:grid-cols-3"
        >
          {availableCars?.map((car) => (
            <CarCard
              carData={car}
              key={car.car_id}
              availabilityFrom={availabilityFrom}
              availabilityTo={availabilityTo}
              hasLiked={car.likes?.some(
                (like) => like === currentUser?.user.user_id
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
