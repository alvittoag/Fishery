import Link from "next/link";

const Back = () => {
  return (
    <Link
      href="/"
      className="text-gray-700 font-medium hover:text-[#4DC7A0] cursor-pointer"
    >
      {"<--"} Kembali
    </Link>
  );
};

export default Back;
