import React from "react";
import AdvertsDisplay from "../components/adverts/AdvertsDisplay";
import PickUpDropOffCard from "../components/PickUpDropOffCard";
import CarCard from "../components/carCardComponents/CarCard";

function Homepage() {
  return (
    <main className="flex flex-col items-center bg-white200 dark:bg-gray900">
      <div className="mt-24 flex w-full max-w-[90rem] flex-col items-center pt-8">
        <AdvertsDisplay />
        <div className="mt-7 flex w-full px-6 xl:px-[3.75rem]">
          <PickUpDropOffCard />
        </div>
        <CarCard />
      </div>
    </main>
  );
}

export default Homepage;
