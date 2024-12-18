import { useQuery } from "react-query";
import { api } from "../lib/axios";
import { use } from "react";

const usePopularCars = () =>
  useQuery(
    "popularCars",
    async () => {
      const res = await api.get("/api/cars/popularCars");
      return res.data;
    },
    {
      staleTime: 300000,
    }
  );

export default usePopularCars;
