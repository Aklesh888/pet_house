import Image from "next/image";
import React from "react";
import dogs from "../../assets/soul.png";
import { ChevronRight, ChevronLeft } from "react-feather";

const HeroSection = () => {
  return (
    <div className="w-[100%] text-center bg-[#d4e6f4] h-[400px] md:h-[550px] self-center bg-transparent flex justify-start items-center flex-col">
      <div className="font-bold text-4xl z-20 my-10">
        We provide best care for our furry friends
      </div>
      <div className="font-medium text-2xl z-20">
        Top quality of pet product store
      </div>
      <div className="flex items-center justify-between z-20 h-full w-full">
        <div className="p-1 rounded-full bg-[#007FFF] absolute mx-2">
          <ChevronLeft className=" z-10 cursor-pointer" color="#fff" />
        </div>
        <div className="p-1 rounded-full bg-[#fff] absolute right-5">
          <ChevronRight className=" z-10 cursor-pointer" color="#007FFF" />
        </div>
      </div>
      <Image src={dogs} alt="" className="md:absolute relative w-full z-10" />
    </div>
  );
};

export default HeroSection;
