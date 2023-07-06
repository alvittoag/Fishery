"use client";

// ** Import Elements
import LoadingBar from "@elements/LoadingBar";

const Loading = () => {
  return (
    <div className="absolute left-0 right-0 -top-10 bottom-0 h-[100vh] backdrop-blur-md">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white p-10 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <LoadingBar width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
