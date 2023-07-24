import React from "react";
import { CheckCircle, ChevronRight } from "react-feather";
import about_1 from "../../assets/about_1.png";
import about_2 from "../../assets/about_2.png";
import about_3 from "../../assets/about_3.png";

import Image from "next/image";

const AboutUs = () => {
  return (
    <div className=" flex flex-col md:flex-row px-5">
      <div className="h-[700px] w-[900px] md:scale-105 scale-75 self-center my-20">
        <div className="bg-[#007FFF] h-[350px] w-[350px] absolute left-52 rounded-full"></div>
        <div className="bg-orange-500 left-36 h-[160px] w-[160px] mt-[500px] absolute rounded-full"></div>
        
        <Image alt="" src={about_1} className="absolute mt-40" />
        <Image alt="" src={about_3} className="absolute mt-96 left-60" />
        <Image
          alt=""
          src={about_2}
          className="absolute mt-60 left-96 rounded-xl border-spacing-[-2px] border-white border-8"
        />
      </div>
      <div className="flex flex-col justify-center md:ml-44 my-10">
        <div className=" font-bold text-5xl">About Us</div>
        <div className="text-2xl pb-10 my-5 text-[#515151]">
          Pet house & Animal clinic was established with moto to provide
          qualitative and affordable animal healthcare service to your doorstep.
        </div>
        <div className="flex flex-col space-y-4">
          <div className=" flex space-x-5 text-xl">
            <CheckCircle color="#007FFF" size={20} />
            <div className="">Comprehensive</div>
          </div>
          <div className=" flex space-x-5 text-xl">
            <CheckCircle color="#007FFF" size={20} />
            <div className="">Professional</div>
          </div>
          <div className=" flex space-x-5 text-xl">
            <CheckCircle color="#007FFF" size={20} />
            <div className="">Compassionate veterinary service</div>
          </div>
        </div>
        <div className="bg-[#007FFF] rounded-full w-48 text-lg text-white flex items-center justify-around h-16 my-16">
          Contact
          <div className=" p-1 bg-white rounded-full">
            <ChevronRight color="#007FFF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
