"use client";
import { Search, Heart, ShoppingCart, Menu, X } from "react-feather";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex h-36 justify-between px-5 bg-white py-10 xl:px-32 font-medium text-[#17224D]">
      <div className="text-2xl xl:w-80 w-32 text-center font-bold">
        Your Logo Here
      </div>
      <div className="justify-evenly w-full hidden text-base xl:text-lg lg:flex py-3">
        <div className="hover:text-[#007FFF] hover:underline ">Home</div>
        <div className="hover:text-[#007FFF] hover:underline ">About</div>
        <div className="hover:text-[#007FFF] hover:underline ">Services</div>
        <div className="hover:text-[#007FFF] hover:underline">Breeds</div>
        <div className="hover:text-[#007FFF] hover:underline ">Shop</div>
        <div className="hover:text-[#007FFF] hover:underline ">Gallery</div>
      </div>
      <div className="p-1 flex  rounded-full border justify-between border-[#007FFF] sm:w-1/2 w-auto h-12">
        <input
          type="text"
          placeholder="Search"
          className="outline-none rounded-3xl px-2 py-1"
        />
        <div className="bg-[#007FFF] rounded-full h-10 w-10 flex  items-center justify-center">
          <Search color="white" className="p-1 pt-1" size={30} />
        </div>
      </div>
      <div className=" mx-5 sm p-1 xl:block hidden">
        <Heart color="#007FFF" size={30} />
      </div>
      <div className="border border-[#007FFF] hidden md:flex rounded-lg p-2 w-32 lg:w-56 mx-2 text-lg text-[#007FFF] items-center justify-around h-12">
        <ShoppingCart color="#007FFF" />2 items
      </div>

      <Menu
        color="black"
        className={`lg:hidden ${open ? `block`: 'hidden'}  z-[110]`}
        size={40}
        onClick={() => {
          setOpen(false);
        }}
      />
      <X
        color="black"
        className={`lg:hidden ${open ? `hidden`: 'block'} z-[110] `}
        size={40}
        onClick={() => {
          setOpen(true);
        }}
      />
      <div className={`fixed left-1/2 z-[100] text-white ${open ? "hidden" : "block"}`}>
        <div className="relative justify-center items-center flex flex-col space-y-5 right-1/2 bg-blue-400 h-96 w-60 rounded-lg">
            <div className=" cursor-pointer hover:text-gray-200">Home</div>
            <div className=" cursor-pointer hover:text-gray-200">About</div>
            <div className=" cursor-pointer hover:text-gray-200">Services</div>
            <div className=" cursor-pointer hover:text-gray-200">Breeds</div>
            <div className=" cursor-pointer hover:text-gray-200">Shop</div>
            <div className=" cursor-pointer hover:text-gray-200">Gallery</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
