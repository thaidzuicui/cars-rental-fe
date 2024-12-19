import { useQuery } from "react-query";
import { api } from "../lib/axios";

const useReviews = (carId) =>
  useQuery(
    ["reviews", carId],
    async () => {
      const res = await api.get(`/api/reviews/reviews/${carId}`);
      return res.data;
    },
    {
      staleTime: 300000,
    }
  );

export default useReviews;
