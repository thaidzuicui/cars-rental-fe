import React, { useState } from "react";

const Advert = ({
  title,
  description,
  imageSrc,
  additionalStyles,
  whiteCar,
  width,
  height,
}) => {
  const [driveAway, setDriveAway] = useState(false);

  const handleClick = () => {
    setDriveAway(true);
    setTimeout(() => setDriveAway(false), 4000);
  };
  return (
    <div
      className={`${additionalStyles} flex h-60 w-full flex-col justify-between overflow-hidden rounded-xl px-6 pb-3 pt-6 sm:h-[22.5rem]`}
      onClick={handleClick}
    >
      <div className="flex flex-col">
        <p className="w-full text-white sm:text-[2rem] sm:font-semibold sm:leading-[2.4rem] lg:w-1/2">
          {title}
        </p>
        <p className="mt-4 w-full text-xs text-white sm:text-base lg:w-1/2">
          {description}
        </p>
      </div>

      <div
        className={`flex w-full justify-center ${driveAway && "car_animation"}`}
      >
        <div className="flex items-center justify-between">
          <div className="absolute flex">
            <ul
              className={`${!driveAway && "hidden"} z-10 ${
                whiteCar
                  ? "translate-y-3 sm:translate-x-[4.2rem]"
                  : "translate-y-2"
              } translate-x-12 `}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7].map((listItem) => (
                <li className="smoke_list" key={listItem}></li>
              ))}
            </ul>
          </div>
          <img
            src={imageSrc}
            alt="car-picture-for-advert"
            width={width}
            height={height}
            className="z-20 ml-0 h-[4.2rem] w-[14rem] self-center xs:h-[5rem] xs:w-[18rem] sm:ml-6 sm:h-[7.25rem] sm:w-[25.5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Advert;
