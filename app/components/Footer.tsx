import Image from "next/image";
import React from "react";
import image from "../../assets/image.png";
import gallery_1 from '../../assets/galary_1.png'
import gallery_2 from '../../assets/galary_2.png'
import gallery_3 from '../../assets/galary_3.png'
import gallery_4 from '../../assets/galary_4.png'
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "react-feather";

const Footer = () => {
  return (
    <div className="h-650 px-16 py-16 w-full flex flex-col bg-[#17224D] border-b text-white">
      <div className="flex md:flex-row flex-col space-x-10 md:space-y-0 space-y-20 pb-10 justify-center items w-full">
        <div className="flex flex-col space-y-10 md:w-1/2">
          <div className="flex pr-10 space-x-10">
            <div className="font-bold text-2xl w-96">Your logo here</div>

            <div className="">
              Unpacked now declared put you confined daughter improved.
              Celebrated imprudence few interested especially reasonable off
              one. Wonder bed elinor family secure met. It want gave west into
              high no in. Depend repair met before man admire see and. An he
              observe be it covered delight hastily message. Margaret no
              ladyship endeavor ye to settling.
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="">Phone number :</div>
            <div className="font-bold">9832032943</div>
            <div className="">Location:</div>
            <div className="font-bold">Kathmandu</div>
          </div>
        </div>
        <div className="flex md:w-1/2 justify-between space-x-10">
          <div className="flex space-y-4 flex-col">
            <div className="font-bold pb-5">Menu</div>
            <div className="">Home</div>
            <div className="">About</div>
            <div className="">Services</div>
            <div className="">Breads</div>
            <div className="">Shop</div>
            <div className="">Contact</div>
          </div>
          <div className="font-bold flex flex-col space-y-5">
            <div className="">Gallery</div>
            <div className="flex flex-wrap h-[100px] w-[300px]">
              <Image src={gallery_1} alt=""/>
              <Image src={gallery_2} alt=""/>
              <Image src={gallery_3} alt=""/>
              <Image src={gallery_4} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row md:p-10 justify-around space-y-8">
        <div className="">
          Copyright 2023 City Prt House & Animal Clinic | All Rights Reserved
        </div>
        <div className="flex space-x-5">
          <div className="p-1 rounded h-8 bg-white">
            <Facebook color="#17224D" />
          </div>
          <div className="p-1 rounded h-8 bg-white">
            <Instagram color="#17224D" />
          </div>
          <div className="p-1 rounded h-8 bg-white">
            <Twitter color="#17224D" />
          </div>
          <div className="p-1 rounded h-8 bg-white">
            <Linkedin color="#17224D" />
          </div>
          <div className="p-1 rounded h-8 bg-white">
            <Youtube color="#17224D" />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
