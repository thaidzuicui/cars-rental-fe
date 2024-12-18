import React from "react";
import { motion } from "framer-motion";
import { advertSilverCar } from "../../assets/pngs";

const ModalImageGallery = ({ carData, displayPicture, setDisplayPicture }) => {
  return (
    <div className="flex flex-col justify-between md:w-full">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex h-[15rem] w-full max-w-full items-center justify-center rounded-lg md:max-w-full lg:min-h-[18rem]"
      >
        <img
          src={carData?.car_imgs[displayPicture] || advertSilverCar}
          alt="main display picture"
          width={300}
          height={225}
          style={{ objectFit: "cover" }}
          className="size-full rounded-lg"
        />
      </motion.div>

      <div className="no_scrollbar mt-5 flex gap-5 overflow-x-auto">
        {carData?.car_imgs.map((image, index) => {
          return (
            <div className="w-1/3 rounded-lg" key={image}>
              <img
                src={image}
                width={100}
                height={100}
                alt="car picture"
                className={`h-full w-auto cursor-pointer rounded-lg p-[3px] ${
                  displayPicture === i && "border border-blue-600 p-[1px]"
                }`}
                onClick={() => setDisplayPicture(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModalImageGallery;
