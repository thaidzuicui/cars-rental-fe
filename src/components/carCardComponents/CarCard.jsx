import React, { useState } from "react";
import { motion } from "framer-motion";
import CarCardMainContent from "./CarCardMainContent";
import { useMutation, useQueryClient } from "react-query";
import { api } from "../../lib/axios";
import { useAuth } from "../../context/AuthContext";
import CarDetailsModalOne from "./CarDetailsModalOne";
import { useLocation } from "react-router-dom";

const carData = {
  carBrand: "Toyota",
  carModel: "Camry",
  carType: "Sedan",
  fuelCapacity: "50",
  transmission: "Automatic",
  capacity: "5 Persons",
  rentPrice: "1000000",
  carImages: [
    "https://i.pinimg.com/474x/b0/e0/2d/b0e02ddb46288ef348c62f4690d0c972.jpg",
    "https://i.pinimg.com/736x/b6/16/1c/b6161c9a8108f9511d0276fc93bfd210.jpg",
    "https://i.pinimg.com/474x/2a/9e/7c/2a9e7c28a7f282a17317ca1669b672aa.jpg",
  ],
};

const CarCard = ({
  carData,
  isPopularCar = false,
  canReview = false,
  availabilityFrom,
  availabilityTo,
  hasLiked,
}) => {
  const { hasToken } = useAuth();
  const location = useLocation();
  const queryClient = useQueryClient();

  const { mutate: toggleFavourite } = useMutation(
    async () => {
      const res = await api.post(`/api/likes/like/${carData.car_id}`);
      return res.data;
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries("likedCars");
      },
    }
  );
  const [motionKey, setMotionKey] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isFavourited, setIsFavourited] = useState(hasLiked);

  const handleButtonClick = () => {
    setIsFavourited((prev) => !prev);
    toggleFavourite();
    setMotionKey((prevKey) => prevKey + 1);
  };

  const carAvailability = () => {
    const bookings = carData?.bookings || [];

    for (const booking of bookings) {
      const rentalDate = new Date(booking.rental_date);
      const returnDate = new Date(booking.return_date);

      // Nếu khoảng thời gian bị trùng với bất kỳ booking nào
      if (
        (availabilityFrom >= rentalDate && availabilityFrom <= returnDate) || // Ngày bắt đầu nằm trong khoảng thuê
        (availabilityTo >= rentalDate && availabilityTo <= returnDate) || // Ngày kết thúc nằm trong khoảng thuê
        (availabilityFrom <= rentalDate && availabilityTo >= returnDate) // Khoảng thời gian bao trùm cả rental_date và return_date
      ) {
        return false; // Xe không khả dụng
      }
    }

    return true; // Xe khả dụng
  };

  return (
    <>
      <motion.div
        animate={{ scale: 1, y: 0 }}
        initial={{ scale: 0, y: 500, opacity: 0 }}
        whileHover={{ scale: 1.02 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={`flex w-full flex-col rounded-lg bg-white
        p-4 shadow hover:shadow-xl dark:bg-gray850 
        ${isPopularCar && "min-w-[18rem]"} 
        sm:w-auto sm:max-w-full`}
      >
        <CarCardMainContent
          motionKey={motionKey}
          carData={carData}
          isPopularCar={isPopularCar}
          isFavourited={isFavourited}
          handleButtonClick={handleButtonClick}
          userId={hasToken}
        />
        <div className="mt-6 flex w-full justify-between">
          <p className="self-center font-medium dark:text-white">
            ${carData?.price1day}/
            <span className="text-xs text-gray400">day</span>
          </p>
          <button
            className="hover-effect rounded-[0.25rem] bg-blue500 px-5 py-2 text-sm font-medium text-white"
            onClick={() => setShowModal(true)}
          >
            More Info
          </button>
        </div>
      </motion.div>
      {showModal && (
        <div
          className={`absolute flex ${
            location.pathname === "/search"
              ? "h-screen w-screen lg:left-5 xl:left-0"
              : "w-screen max-w-7xl"
          } w-screen items-center justify-center xs:pr-14 xl:justify-self-center xl:pr-0`}
        >
          <CarDetailsModalOne
            carData={carData}
            setShowModal={setShowModal}
            isPopular={isPopularCar}
            canReview={canReview}
            carAvailability={carAvailability()}
          />
        </div>
      )}
    </>
  );
};

export default CarCard;
