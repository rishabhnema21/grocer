import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import AuthModal from "./AuthModal";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Catalog", path: "/catalog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, setShowUserLogin, setAuthMode, navigate, searchQuery, setSearchQuery } = useAppContext();
  const [typedValue, setTypedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(typedValue);
    }, 350);

    return () => clearTimeout(handler);
  }, [typedValue])

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/catalog");
    }
  }, [searchQuery])

  const logout = async () => {
    setUser(null);
    navigate("/");
  }

  return (
    <header className="flex items-center relative shadow-xs justify-between z-50">
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
            <NavLink
              className="hover:underline hover:text-black transition-all duration-100 ease-in"
              key={name}
              to={path}
            >
              {name}
            </NavLink>
          ))}

          {user && (
            <NavLink key={orders} to="/orders">
              My Orders
            </NavLink>
          )}
        </nav>
      </div>

      <div className="hidden md:flex justify-center items-center space-x-6">
        <div className="search-bar relative">
          <Search className="absolute left-3 h-5 top-1/2 transform -translate-y-1/2 text-sm text-gray-400" />
          <input
            type="text"
            onChange={(e) => setTypedValue(e.target.value)}
            placeholder="Search"
            className="pl-10 py-2 w-full border text-sm rounded-xl border-[#9F9F9F] focus:outline-none"
          />
        </div>
        <div onClick={() => navigate("/cart")} className="h-10 w-10 relative hover:bg-[#d18f01] transition-all cursor-pointer duration-200 ease-in-out rounded-full bg-[#e59f06]">
          <ShoppingCart className="absolute transform -translate-y-1/2 top-1/2 h-5 left-2 text-white" />
          <div className="h-5 w-5 bg-[#184a32] absolute -right-2 text-sm -top-2 text-center flex justify-center items-center text-white rounded-full">3</div>
        </div>
        <div>
          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                 setAuthMode("login");
                 setShowUserLogin(true);
              }}
              className="bg-[#2B6E4E] hover:bg-[#1b5c3d] transition-all duration-200 ease-in cursor-pointer px-8 py-2 text-sm text-white rounded-xl"
            >
              Login
            </button>
          ) : (
            <button
            onClick={logout}
            className="bg-[#2B6E4E] hover:bg-[#1b5c3d] transition-all duration-200 ease-in cursor-pointer px-8 py-2 text-sm text-white rounded-xl">
              Logout
            </button>
          )}
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

            {user && (
              <NavLink key={orders} to="/orders" onClick={() => setOpen(false)}>
                My Orders
              </NavLink>
            )}
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

              {!user ? (
                <button
                  onClick={() => {setOpen(false);
                    setShowUserLogin(true);
                  }}
                  className="bg-[#2B6E4E] px-5 py-2 hover:bg-[#1b5c3d] transition-all duration-200 ease-in cursor-pointer text-sm text-white rounded-xl"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={() => {setOpen(false);
                    navigate("/")
                  }}
                  className="bg-[#2B6E4E] px-5 py-2 hover:bg-[#1b5c3d] transition-all duration-200 ease-in cursor-pointer text-sm text-white rounded-xl"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
