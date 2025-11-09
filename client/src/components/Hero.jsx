import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="mt-10 relative rounded-2xl flex flex-col md:flex-row justify-evenly items-center bg-[#2B6E4E]">
      <div className="md:w-1/2 ml-6 mt-9 md:mt-0 md:ml-16 text-white">
        <h1 className="text-5xl md:text-7xl md:w-3/4 font-bold">
          Make healthy life with{" "}
          <span className="relative text-[#E1FF30]">
            fresh{" "}
            <svg
              className="absolute hidden md:block left-0"
              width="400"
              height="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="pathItem"
                d="M5 6 Q 35 35 170 5"
                stroke="white"
                fill="transparent"
                stroke-width="7"
                stroke-linecap="round"
              />
            </svg>
          </span>{" "}
          grocery
        </h1>
        <p className="mt-6 md:w-3/4">
          Discover the highest quality groceries from across the globe, and shop
          them all conveniently on our website
        </p>

        <button className="mt-6">
          <Link
            to={"/products"}
            className="bg-[#FF5F2D] hover:bg-[#cd3202] transition-all duration-200 ease-in border border-white px-6 py-2 rounded-sm cursor-pointer"
          >
            Shop Now
          </Link>
        </button>
      </div>

      <div>
        <div>
          <img className="w-[18rem] md:w-[33rem]" src="/heroImg.png" alt="" />
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-16 right-1/3 shadow-[4px_26px_34px_-1px_rgba(0,_0,_0,_0.5)] flex justify-between items-center py-1 md:py-2 md:pr-4 rounded-xl bg-white">
        <div className="rounded-full ml-2 h-10 w-10 bg-[#2B6E4E]"></div>
        <div className="ml-5 mr-2">
          <h1 className="text-sm font-semibold">Fast Delivery</h1>
          <p className="text-gray-400 text-sm">Free of cost any delievry</p>
        </div>
      </div>

      <div className="absolute hidden top-1/2 right-7 bg-white opacity-80 py-4 px-2 rounded-xl md:flex md:items-center md:flex-col">
        <div className="rounded-full border border-gray-600 h-16 w-16 bg-[#EDE2E3]"></div>
        <div className="text-center mt-2">
          <h1 className="font-semibold text-xs">100% Fresh</h1>
          <p className="text-xs text-gray-400">Quality maintain</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
