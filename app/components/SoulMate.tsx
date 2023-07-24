import React from "react";
import { ChevronRight } from "react-feather";
import friend from "../../assets/friend.png";
import Image from "next/image";

const SoulMate = () => {
  return (
    <div
      className={`self-center sm:h-[328px] w-full h-[400px] sm:mx-5 mx-1 rounded-2xl text-white bg-orange-400 flex relative`}
    >
      <div className="absolute w-full h-full">
        <Image src={friend} alt="" className="h-full w-full md:block hidden"/>
      </div>
      <div className="relative flex sm:p-24 p-5 flex-col text-left justify-center space-y-10">
        <div className="flex flex-col space-y-10 justify-center">
          <div className="md:text-xl text-base">One more friend, thousands more fun</div>
          <div className="md:text-4xl text-2xl">
            "Find your furry soulmate at Our Pet shop"
          </div>
        </div>

        <div className="bg-white rounded-full md:w-48 md:text-lg text-orange-500 flex items-center justify-around md:h-16 my-8 p-3 h-12 w-32 text-base">
          Get now
          <div className="p-1 bg-orange-500 rounded-full">
            <ChevronRight color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoulMate;
