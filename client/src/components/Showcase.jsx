import React from "react";

const Showcase = () => {
  return (
    <div className="mt-10 py-8 md:py-16 flex flex-col-reverse md:flex-row justify-evenly items-center bg-gradient-to-r from-[#f4f4f4] via-[#F7F7F7] to-[#e7e7e7] rounded-2xl">
      <div className="">
        <img src="/groceryBag.png" className="h-[40vh] md:h-[65vh]" alt="" />
      </div>

      <div className="mx-4 md:mx-0 md:w-1/2">
        <h3 className="font-semibold text-[#9b6a00]">SHOWCASE</h3>
        <h2 className="text-5xl font-medium md:font-semibold mt-7 leading-14 md:w-3/4">
          Best quality grocery just for you.
        </h2>

        <p className="mt-7 font-medium text-gray-500">
          We prioritize quality in all our groceries. <br /> Here are the
          advantages of choosing our products:
        </p>
        <ul className="styled-list">
          <li>Fresh and high-quality products guaranteed</li>
          <li>Fast and reliable delivery service</li>
          <li>24/7 customer support for your convenience</li>
        </ul>

        <button className="bg-[#ed4300] rounded-md cursor-pointer transition-all duration-200 ease-in hover:bg-[#ff6427] text-white mt-4 px-7 py-3">Read More</button>
      </div>
    </div>
  );
};

export default Showcase;
