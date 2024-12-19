import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { cross, whiteCross } from "../../assets/svg-icons";
import ModalImageGallery from "./ModalImageGallery";
import ModalCarDetails from "./ModalCarDetails";
import CarDetailModalTwo from "./CarDetailModalTwo";

const CarDetailsModalOne = ({
  carData,
  setShowModal,
  isPopular,
  canReview,
  carAvailability,
}) => {
  const location = useLocation();
  const [displayPicture, setDisplayPicture] = useState(0);
  const [showModalScreen2, setShowModalScreen2] = useState(false);
  const [motionKey, setMotionKey] = useState(0);
  const [closeModal, setCloseModal] = useState(false);

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

  const handleShowModalTwo = () => {
    setShowModalScreen2(true);
    setMotionKey((prevKey) => prevKey + 1);
  };

  const handleCloseClick = () => {
    setCloseModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 250);
  };

  return (
    <>
      <motion.div
        key={motionKey}
        animate={{ scale: closeModal ? 0 : 1 }}
        initial={{ scale: 0 }}
        className={`fixed inset-x-2 top-28 lg:top-[12.75rem] flex flex-col rounded-lg bg-white p-4 dark:bg-gray850 xs:inset-x-auto sm:flex-row z-50 
            ${!isPopular && "xs:-mr-14 sm:mr-0"} ${
          location.pathname === "/search" && "xs:ml-3 xs:mr-1 sm:mr-4 lg:ml-6"
        }
        ${
          !showModalScreen2
            ? "max-w-[30rem] lg:max-w-[65.9rem] ml-[11.5rem] "
            : "h-auto max-w-[31.25rem] ml-[30rem]"
        } 
        `}
      >
        {showModalScreen2 && (
          <CarDetailModalTwo
            setShowModal={handleCloseClick}
            carData={carData}
          />
        )}
        <div
          className={`flex flex-col lg:flex-row ${
            showModalScreen2 && "hidden"
          }`}
        >
          <div className="absolute -top-4 right-2 rounded-sm bg-white dark:bg-gray850">
            <img
              src={!isDarkMode ? cross : whiteCross}
              height={20}
              width={20}
              alt="close modal"
              onClick={handleCloseClick}
              className="flex cursor-pointer self-start lg:hidden"
            />
          </div>
          <ModalImageGallery
            carData={carData}
            displayPicture={displayPicture}
            setDisplayPicture={setDisplayPicture}
          />
          <ModalCarDetails
            carData={carData}
            canReview={canReview}
            setShowModal={handleCloseClick}
            handleButtonClick={handleShowModalTwo}
            carAvailability={carAvailability}
            isDarkMode={isDarkMode}
          />
        </div>
      </motion.div>
      <div
        className="fixed inset-0 z-40 size-full bg-black opacity-50 dark:bg-gray900 dark:opacity-70"
        onClick={handleCloseClick}
      ></div>
    </>
  );
};

export default CarDetailsModalOne;
