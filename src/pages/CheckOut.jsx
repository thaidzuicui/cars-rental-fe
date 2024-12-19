import React from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "../components/ui/use-toast";
import { useMutation } from "react-query";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import { api } from "../lib/axios";

const CheckOut = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const price = searchParams.get("price");
  const totalDays = searchParams.get("totalDays");
  const date = JSON.parse(searchParams.get("date") || "{}");
  const id = searchParams.get("id");
  const totalPrice = (price / 100) * totalDays;

  const formatDateForSql = (dateString) => {
    const date = new Date(dateString); // Chuyển chuỗi thành đối tượng Date
    if (isNaN(date)) {
      throw new Error(`Invalid date: ${dateString}`); // Xử lý lỗi nếu date không hợp lệ
    }
    return format(date, "yyyy-MM-dd HH:mm:ss");
  };

  const { isLoading, mutate: Rent } = useMutation(
    async () => {
      const res = await api.post(`/api/rentals/rentCar/${id}`, {
        rental_date: formatDateForSql(date.from),
        return_date: formatDateForSql(date.to),
        payment_amount: totalPrice,
      });
      return res.data;
    },
    {
      onSuccess: (data) => {
        if (data.message) {
          toast({
            title: "Success",
            description: data.message,
            variant: "success",
          });
        }
        navigate("/");
      },

      onError: (err) => {
        toast({
          title: "Error",
          description: err.response.data.message,
          variant: "destructive",
        });
      },
    }
  );

  return (
    <>
      <div className="flex items-center justify-center bg-white200 dark:bg-gray900">
        <div className="relative flex flex-col mt-[10rem] mb-6 space-y-8 bg-white dark:bg-gray850 shadow-2xl rounded-2xl shrink-0">
          <div className="flex flex-col justify-center items-center p-4">
            <button
              className="w-full text-l bg-blue500 text-white pt-2 pb-2 pr-20 pl-20 rounded-lg m-3 hover:bg-blue300 hover:border hover:broder-gray-300"
              disabled={isLoading}
              onClick={Rent}
            >
              Pay ${totalPrice}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
