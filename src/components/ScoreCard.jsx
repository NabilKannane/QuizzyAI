import { useState } from "react";
import Home from "./Home";

export default function ScoreCard({ scoreQuizz, max_num }) {
  const [cancel, setCancel] = useState(false);

  let niveau = "";
  if (scoreQuizz >= max_num / 2) {
    niveau = "text-green-400";
  } else {
    niveau = "text-red-400";
  }

  const handleCancel = () => {
    setCancel(true);
  };
 
  if (cancel) {
    return <Home />;
  }

  return (
    <>
      <div class="m-6 items-center border-2 border-[rgba(35,30,41,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#131313] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[2em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
        <h2 class="text-md font-thin py-2 text-gray-200">Score </h2>
        <h3 className={`text-6xl text-bold mb-4 ${niveau}`}>
          {scoreQuizz} <span className="text-sn">/ {max_num}</span>
        </h3>
        <p class="text-md text-gray-500 px-2">
          Do you really want to publish your quiz?
        </p>
        <div class="p-2 mt-2 text-center space-x-1 md:block">
          <button
            className=" shadow-slate-800 shadow-md transition-background inline-flex h-12 items-center justify-center rounded-md  border border-gray-800 bg-gradient-to-r from-[#111111] via-neutral-900 to-[#8c2fff] bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium hover:text-white duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
            onClick={handleCancel}
          >
            Cancel
          </button>
          {/* <button 
            className=" shadow-slate-800 shadow-md transition-background inline-flex h-12 items-center justify-center rounded-md  border border-gray-800 bg-gradient-to-r from-[#111111] via-neutral-900 to-[#8c2fff] bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium hover:text-white duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
            Publish
          </button> */}
        </div>
      </div>
    </>
  );
}
