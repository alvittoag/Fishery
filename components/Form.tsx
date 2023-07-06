"use client";

// ** Import React
import { ChangeEvent, useState } from "react";

// ** Import Schema
import { Ifish } from "@schema/Fish";

// ** Import Elements
import Input from "@elements/Input";

// ** Import Other
import { useRouter } from "next/navigation";
import { postFish, putFish } from "@services/apiFish";
import LoadingBar from "@elements/LoadingBar";

const Form = ({ edit }: { edit?: Ifish }) => {
  const [input, setinput] = useState<Ifish>({
    name: edit ? edit.name : "",
    size: edit ? edit.size : 0,
    price: edit ? edit.price : 0,
    province: edit ? edit.province : "",
    city: edit ? edit.city : "",
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  const handlePost = () => {
    setLoading(true);
    postFish(input).then(() => {
      setLoading(false);

      router.replace("/");

      router.refresh();
    });
  };

  const handlePut = () => {
    setLoading(true);
    putFish(edit?.id, input).then(() => {
      setLoading(false);

      router.replace("/");

      router.refresh();
    });
  };

  return (
    <div className="px-32 space-y-16 py-5 pb-3">
      <div className="space-y-10">
        <Input
          label="Nama Ikan"
          name="name"
          onChange={handleOnChange}
          type="text"
          value={input.name}
          placeholder="Bandeng"
        />

        <Input
          label="Size"
          name="size"
          onChange={handleOnChange}
          type="number"
          value={input.size}
          placeholder="20"
        />

        <Input
          label="Price"
          name="price"
          onChange={handleOnChange}
          type="number"
          value={input.price}
          placeholder="200000"
        />

        <Input
          label="Province"
          name="province"
          onChange={handleOnChange}
          type="text"
          value={input.province}
          placeholder="Jawa Barat"
        />

        <Input
          label="City"
          name="city"
          onChange={handleOnChange}
          type="text"
          value={input.city}
          placeholder="CIkampek"
        />
      </div>

      <button
        onClick={edit ? handlePut : handlePost}
        disabled={loading}
        className={`flex ${
          loading ? "bg-gray-100 border" : "bg-primary hover:bg-green-700"
        } mx-auto  w-[20rem] h-[40px] items-center justify-center rounded-lg text-white disabled:cursor-not-allowed`}
      >
        {loading ? (
          <LoadingBar width={25} height={25} />
        ) : edit ? (
          "Edit Data"
        ) : (
          "Tambah Data"
        )}
      </button>
    </div>
  );
};

export default Form;
