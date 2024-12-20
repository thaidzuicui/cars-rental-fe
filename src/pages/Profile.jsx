import React from "react";

import ProfileHeading from "../components/ProfileHeading";
import useCurrentUser from "../queries/useCurrentUser";
import useLikedCars from "../queries/useLikedCars";
import FavoriteCars from "../components/FavoriteCars";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { hasToken } = useAuth();
  const { data: currentUser } = useCurrentUser(hasToken);
  const { data: favoriteCars } = useLikedCars();

  return (
    <div className="flex w-full justify-center self-center bg-white200 dark:bg-gray900">
      <div className="mt-20 flex w-full max-w-[82.5rem] flex-col p-6 md:mt-40">
        <ProfileHeading userData={currentUser} />
        <FavoriteCars
          favoriteCars={favoriteCars}
          userId={currentUser?.user.user_id}
        />
      </div>
    </div>
  );
};

export default Profile;
