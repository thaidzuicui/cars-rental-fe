import { useQuery } from "react-query";
import { api } from "../lib/axios";

const useLikedCars = () =>
  useQuery(
    "likedCars",
    async () => {
      const res = await api.get("/api/cars/likedCars");
      return res.data;
    },
    {
      staleTime: 300000,
    }
  );

export default useLikedCars;
