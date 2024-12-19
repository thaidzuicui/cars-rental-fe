import React from "react";
import { MapPin } from "lucide-react";

import StarRating from "../reviewComponents/StarRating";
import { cross, whiteCross } from "../../assets/svg-icons";
import useReviews from "../../queries/useReviews";

const findAverageRating = (reviews) => {
  if (!Array.isArray(reviews) || reviews.length === 0) {
    // Trả về 0 hoặc một giá trị mặc định nếu reviews không hợp lệ
    return 0;
  }

  let rating = 0;
  reviews.forEach((review) => {
    rating += review.review_score;
  });
  return rating / reviews.length;
};

const ModalCarDetails = ({
  carData,
  canReview,
  setShowModal,
  handleButtonClick,
  carAvailability,
  isDarkMode,
}) => {
  const { data: carReviews } = useReviews(carData.car_id);
  const numberOfReviews = carReviews?.reviews.length;
  const starRating = findAverageRating(carReviews?.reviews);
  const availabilityColor = carAvailability
    ? "bg-blue500 hover-effect"
    : "bg-blue100 dark:text-gray400 dark:bg-gray800";

  return (
    <div className="mt-8 flex flex-col px-2 md:w-full lg:ml-10 lg:mt-0 lg:justify-between lg:p-6">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-xl font-medium lg:text-3xl dark:text-white">
            {carData?.brand} {carData?.model}
          </p>
          <img
            src={!isDarkMode ? cross : whiteCross}
            height={34}
            width={34}
            alt="close modal"
            onClick={() => setShowModal(false)}
            className="hidden cursor-pointer self-start dark:text-white200 lg:flex"
          />
        </div>
        <div className="flex w-full justify-between sm:mt-2">
          <StarRating rating={starRating || 0} reviews={numberOfReviews} />
          {canReview ? (
            <button
              className="dark:hover-effect cursor-pointer self-center rounded border border-gray300 bg-white200 px-3 py-2 font-light hover:bg-blue500 hover:text-white dark:bg-white/50"
              //   onClick={() => setShowReviewScreen(true)}
            >
              Review
            </button>
          ) : numberOfReviews ? (
            <button
              className="dark:hover-effect cursor-pointer self-center justify-self-end rounded border border-gray300 bg-white200 px-3 py-2 font-light hover:bg-blue500 hover:text-white dark:bg-white/50"
              //   onClick={() => setShowListOfReviews(true)}
            >
              Reviews
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2 text-lg font-light lg:text-xl dark:text-white">
        <MapPin />
        {carData.location}
      </div>
      <p className="mt-2 text-xs font-light leading-6 text-gray700 dark:text-white200 lg:text-lg lg:leading-10">
        {carData.description}
      </p>
      <div className="sm:w-[26rem]">
        <div className="mt-4 flex justify-between gap-8 ">
          <div className="flex w-full justify-between">
            <p className="text-xs text-gray400 sm:text-lg lg:text-xl">
              Type Car
            </p>
            <p className="text-right text-xs text-gray700 dark:text-white200 sm:text-lg lg:text-xl">
              {carData.body_type}
            </p>
          </div>
          <div className="flex w-full justify-between">
            <p className="text-xs text-gray400 sm:text-lg lg:text-xl">
              Capacity
            </p>
            <p className="text-right text-xs text-gray700 dark:text-white200 sm:text-lg lg:text-xl">
              {carData.capacity}
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-between gap-8">
          <div className="flex w-full justify-between">
            <p className="text-xs text-gray400 sm:text-lg lg:text-xl">
              Transm.
            </p>
            <p className="text-right text-xs text-gray700 dark:text-white200 sm:text-lg lg:text-xl">
              {carData.transmission_type}
            </p>
          </div>
          <div className="flex w-full justify-between">
            <p className="text-xs text-gray400 sm:text-lg lg:text-xl">
              Gasoline
            </p>
            <p className="text-xs text-gray700 dark:text-white200 sm:text-lg lg:text-xl">
              {carData.maximum_gasoline}L
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex w-full justify-between">
        <p className="self-center font-medium sm:text-2xl dark:text-white200">
          ${carData.price1day}/
          <span className="text-xs text-gray-400 sm:text-base"> day</span>
        </p>
        <button
          className={`${availabilityColor} h-14 rounded-[0.625rem] px-6 py-2 font-medium text-white`}
          onClick={handleButtonClick}
          disabled={!carAvailability}
        >
          {!carAvailability
            ? "Unavailable"
            : canReview
            ? "Rent Again"
            : "Rent Now"}
        </button>
      </div>
    </div>
  );
};

export default ModalCarDetails;
