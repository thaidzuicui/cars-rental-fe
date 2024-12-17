import { useQuery } from "react-query";
import { api } from "../lib/axios";

const useCurrentUser = () =>
  useQuery(
    "currentUser",
    async () => {
      const res = await api.get("/api/users/currentUser");
      return res.data;
    },
    {
      staleTime: 300000,
    }
  );

export default useCurrentUser;
