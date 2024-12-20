import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { defaultImg } from "../assets/pngs";

const ProfileHeading = ({ userData }) => {
  const navigate = useNavigate();
  return (
    <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }}>
      <div className="flex justify-between">
        <p className="text-xl font-semibold text-gray900 dark:text-white200">
          My Profile
        </p>
      </div>
      <section className="mt-6 flex h-auto w-full flex-col rounded-xl bg-white dark:bg-gray850">
        <div className="relative flex h-40 md:h-48">
          <img
            src={defaultImg}
            alt="cover image"
            layout="fill"
            style={{
              objectFit: "cover",
              objectPosition: "center 80%",
            }}
            className="rounded-t-xl"
          />
        </div>
        <div className="ml-3.5 flex flex-col justify-between md:ml-8 md:h-[7.375rem] md:flex-row">
          <div className="flex flex-col md:flex-row">
            <img
              src={userData?.user.profile_image}
              alt="profile pic"
              height={70}
              width={70}
              className="absolute size-[4.38rem] shrink-0 translate-y-[-35px] rounded-full md:size-[10rem] md:translate-y-[-63px]"
            />
            <div className="mt-10 flex flex-col md:mb-8 md:ml-48 md:mt-4">
              <p className="mt-2.5 text-xl font-semibold dark:text-white200">
                {userData?.user.full_name}
              </p>
              <p className="mt-2 w-3/5 text-sm text-gray400 sm:w-full">
                {userData?.user.username}
              </p>
            </div>
          </div>
          <button
            className="hover-effect mb-5 mr-2.5 mt-3 self-end rounded-lg bg-blue500 px-6 py-3 text-xs font-semibold text-white md:mb-8 md:mr-12 md:mt-0 md:text-sm"
            onClick={() => navigate("/profile/edit")}
          >
            Edit Profile
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default ProfileHeading;
