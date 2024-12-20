import { useQuery } from "react-query";
import { api } from "../lib/axios";

const useAllCars = () =>
  useQuery(
    "allCars",
    async () => {
      const res = await api.get("/api/cars/allCars");
      return res.data;
    },
    {
      staleTime: 300000,
    }
  );

export default useAllCars;
