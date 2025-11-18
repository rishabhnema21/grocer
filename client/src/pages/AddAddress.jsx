import React from "react";

const AddAddress = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className="mt-5 flex justify-evenly items-center">
      <div>
        <div className="text-2xl sm:text-3xl mt-12 font-medium">
          <h2 className="text-gray-700">
            Add New <span className="text-green-600">Address</span>
          </h2>
        </div>

        <div className="mt-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3" action="">
            <div>
              <input
                className="border outline-none border-gray-400 px-3 py-2 w-[100%] rounded-sm"
                type="text"
                placeholder="Enter Street Name"
              />
            </div>
            <div className="street flex justify-between gap-3 items-center">
              <input
                className="border outline-none border-gray-400 px-3 py-2 w-[100%] rounded-sm"
                type="text"
                placeholder="Enter City"
              />
              <input
                className="border outline-none border-gray-400 px-3 py-2 w-[100%] rounded-sm"
                type="text"
                placeholder="Enter State"
              />
            </div>
            <div className="street flex justify-between gap-3 items-center">
              <input
                className="border outline-none border-gray-400 px-3 py-2 w-[100%] rounded-sm"
                type="text"
                placeholder="Enter Zip Code"
              />
              <input
                className="border outline-none border-gray-400 px-3 py-2 w-[100%] rounded-sm"
                type="text"
                placeholder="Enter Country"
              />
            </div>
            <div>
              <input
                className="border outline-none border-gray-400 px-3 py-2 w-[100%] rounded-sm"
                type="tel"
                placeholder="Enter Phone Number"
              />
            </div>

            <button className="bg-[#2B6E4E] mt-3 hover:bg-[#1b5c3d] transition-all duration-200 ease-in cursor-pointer px-10 py-2 text-white rounded-sm">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="hidden md:block">
        <img className="w-[30vw]" src="/address.png" alt="" />
      </div>
    </div>
  );
};

export default AddAddress;
