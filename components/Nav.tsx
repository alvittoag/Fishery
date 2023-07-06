"use client";

// ** Import Elements
import Back from "@elements/Back";

// ** Import Other
import { usePathname, useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();

  const params = usePathname();

  return (
    <div className="bg-seccondary relative py-10 px-8  rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-between items-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Fishery</h1>

        <p className="font-medium">List Ikan di Indonesia</p>

        <div className="bg-primary p-[4px] rounded-3xl w-16" />
      </div>

      {params === "/" ? (
        <button
          onClick={() => router.replace("/add-data")}
          className="bg-primary py-2 px-5 rounded-xl text-white hover:bg-green-800"
        >
          Tambah Data Ikan
        </button>
      ) : (
        <Back />
      )}
    </div>
  );
}
