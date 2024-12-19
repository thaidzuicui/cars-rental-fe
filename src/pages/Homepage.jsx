import React from "react";
import AdvertsDisplay from "../components/adverts/AdvertsDisplay";
import PickUpDropOffCard from "../components/PickUpDropOffCard";
import usePopularCars from "../queries/usePopularCars";
import { useAuth } from "../context/AuthContext";
import useCurrentUser from "../queries/useCurrentUser";
import PopularCars from "../components/homepageComponents/PopularCars";

function Homepage() {
  const { hasToken } = useAuth();
  const { data, isLoading } = usePopularCars();
  const { data: currentUser } = useCurrentUser(hasToken);
  return (
    <main className="flex flex-col items-center bg-white200 dark:bg-gray900">
      <div className="mt-24 flex w-full max-w-[90rem] flex-col items-center pt-8">
        <AdvertsDisplay />
        <div className="mt-7 flex w-full px-6 xl:px-[3.75rem]">
          <PickUpDropOffCard />
        </div>
        <PopularCars popularCars={data} userId={currentUser?.user.user_id} />
      </div>
    </main>
  );
}

export default Homepage;
