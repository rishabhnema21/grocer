import React, { useState } from "react";
import { NavLink } from "react-router";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Catalog", path: "/catalog" },
  { name: "Shop", path: "/shop" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center relative shadow-xs justify-between">
      <div className="flex items-center gap-14 justify-between">
        {/* Logo */}
        <div>
          <img
            src="/grocerLogo.png"
            alt="grocer logo"
            className="h-12 md:h-16"
          />
        </div>
        <nav className="hidden md:flex space-x-8 text-[#9F9F9F]">
          {navLinks.map(({ name, path }) => (
            <NavLink className='hover:underline transition-all duration-500 ease-in' key={name} to={path}>
              {name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="hidden md:flex justify-center items-center space-x-6">
        <div className="search-bar relative">
          <Search className="absolute left-3 h-5 top-1/2 transform -translate-y-1/2 text-sm text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 py-1 w-full border text-sm rounded-3xl border-[#9F9F9F] focus:outline-none"
          />
        </div>
        <div className="h-10 w-10 relative hover:bg-[#d18f01] transition-all cursor-pointer duration-200 ease-in-out rounded-full bg-[#e59f06]">
          <ShoppingCart className="absolute transform -translate-y-1/2 top-1/2 h-5 left-2 text-white" />
        </div>
        <div>
          <button className="bg-[#2B6E4E] hover:bg-[#28543f] transition-all cursor-pointer duration-200 ease-in-out px-5 py-2 text-sm text-white rounded-xl">
            Sign Up
          </button>
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#e59f06] px-2 py-2 rounded-2xl text-white"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute right-0 top-16 w-full text-center bg-[#e59f06] px-4 pb-4">
          <nav className="flex flex-col space-y-2 py-5 text-[#fff]">
            {navLinks.map(({ name, path }) => (
              <NavLink key={name} to={path} onClick={() => setOpen(false)}>
                {name}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-col-reverse items-center gap-4 pt-2">
            <div className="relative w-3/4">
              <Search className="absolute left-3 h-5 top-1/2 transform -translate-y-1/2 text-sm text-white" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 py-1 w-full border text-white rounded-3xl border-[#fff] focus:outline-none"
              />
            </div>

            <div className="flex flex-col space-y-3 justify-evenly items-center">
              <button className="h-10 w-12 relative rounded-2xl bg-[#fff]">
                <ShoppingCart className="absolute transform -translate-y-1/2 top-1/2 h-5 left-2 text-[#e59f06]" />
              </button>

              <button className="bg-[#2B6E4E] px-5 py-2 text-sm text-white rounded-xl">
                Sign Up
              </button>
            </div>
            
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
