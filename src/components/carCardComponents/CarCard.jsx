import React, { useState } from "react";
import { motion } from "framer-motion";
import CarCardMainContent from "./CarCardMainContent";

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

const CarCard = ({ canEdit = false, isPopularCar = false }) => {
  const [motionKey, setMotionKey] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isFavourited, setIsFavourited] = useState(true);

  const handleButtonClick = () => {
    setIsFavourited((prev) => !prev);
    setMotionKey((prevKey) => prevKey + 1);
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
          canEdit={canEdit}
          isPopularCar={isPopularCar}
          isFavourited={isFavourited}
          handleButtonClick={handleButtonClick}
        />
        <div className="mt-6 flex w-full justify-between">
          <p className="self-center font-medium">
            {carData.rentPrice}VNĐ/
            <span className="text-xs text-gray400">day</span>
          </p>
          <button
            className={`hover-effect rounded-[0.25rem] bg-blue500 px-5 py-2 text-sm font-medium text-white ${
              canEdit && "hidden"
            }`}
            onClick={() => setShowModal(true)}
          >
            More Info
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default CarCard;
