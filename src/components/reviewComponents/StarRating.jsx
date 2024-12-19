import React from "react";
import { goldStar, emptyStar } from "../../assets/svg-icons";

const numberOfGoldenStars = (number) => {
  return Math.floor(number);
};

function roundDownToNearestTen(number) {
  if (number < 10) {
    return number;
  } else {
    return Math.floor(number / 10) * 10;
  }
}

export const StarRating = ({ rating, reviews }) => {
  const goldenStars = rating ? numberOfGoldenStars(rating) : 0;
  const reviewCount = reviews ? roundDownToNearestTen(reviews) : 0;
  const blankStars = 4 - goldenStars;
  const goldPartialStarPercentage = rating % 1;
  const blankPartialStarPercentage = 1 - goldPartialStarPercentage;

  const partialGoldenStarBoxWidth = {
    width: `${Math.round(20 * goldPartialStarPercentage)}px`,
  };
  const partialBlankStarBoxWidth = {
    width: `${Math.round(20 * blankPartialStarPercentage)}px`,
  };

  return (
    <div className="mt-2.5 flex">
      {Array.from({ length: goldenStars }).map((star, index) => (
        <img
          key={index}
          src={goldStar}
          alt="golden-star"
          height={20}
          width={20}
          //   style={{ objectFit: "cover" }} // Use inline styles
        />
      ))}
      <div style={partialGoldenStarBoxWidth} className="flex overflow-hidden">
        <img
          src={goldStar}
          alt="golden-partial-star"
          height={20}
          width={20}
          //   style={{ objectFit: "cover" }} // Use inline styles
          className="min-w-[20px]"
        />
      </div>
      <div
        style={partialBlankStarBoxWidth}
        className={`flex ${
          goldenStars === 5 && "hidden"
        } justify-end overflow-hidden`}
      >
        <img
          src={emptyStar}
          alt="blank-partial-star"
          height={20}
          width={20}
          //   style={{ objectFit: "cover" }} // Use inline styles
          className="min-w-[20px]"
        />
      </div>
      {Array.from({ length: blankStars }).map((star, index) => (
        <img
          key={index}
          src={emptyStar}
          alt="blank-star"
          width={20}
          height={20}
          //   style={{ objectFit: "cover" }} // Use inline styles
        />
      ))}
      <p className="ml-2 self-center dark:text-white">
        {reviewCount}
        {reviews % 10 !== 0 && reviews > 9 && "+"}{" "}
        {reviews === 1 || reviews === 0 ? "Review" : "Reviews"}
      </p>
    </div>
  );
};

export default StarRating;
