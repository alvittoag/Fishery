"use client";

// ** Import React
import { useState } from "react";

// ** Import Schema
import { Ifish } from "@schema/Fish";

// ** Import Other
import { useRouter } from "next/navigation";
import { deleteFish } from "@services/apiFish";
import LoadingBar from "@elements/LoadingBar";

const FishCard = ({ data }: { data: Ifish }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);

    deleteFish(data.id).then(() => {
      router.refresh();

      setLoading(false);
    });
  };

  const handleNavigateEdit = () => {
    router.replace(`/edit-data/${data.id}`);
  };

  return (
    <div className="bg-white px-6 py-4 rounded-2xl space-y-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="space-y-1">
        <h1 className="font-[400]">{data.name}</h1>
        <h2 className="font-bold">{data.price}</h2>
        <p className="text-[11px]">
          {data.province} - {data.city}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-[11px]">Size: {data.size}</p>

        <div className="space-x-2 flex items-center text-white">
          <button
            disabled={loading}
            onClick={handleNavigateEdit}
            className="bg-primary text-sm px-3 py-1 rounded-xl hover:bg-green-700 disabled:cursor-not-allowed"
          >
            Edit
          </button>

          <button
            disabled={loading}
            onClick={handleDelete}
            className={`${
              loading ? "bg-gray-100 border" : "bg-red-600 hover:bg-red-800"
            }  text-sm  h-[30px] items-center rounded-xl disabled:cursor-not-allowed w-[70px] flex justify-center`}
          >
            {loading ? <LoadingBar width={22} height={20} /> : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FishCard;
