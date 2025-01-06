import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFutbol } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black relative z-50">
       <Link to="/" className="flex items-center">
        <FaFutbol size={30} className="text-[#FF8400] mr-2" /> {/* Ikon bola yang benar */}
        <h1 className="text-3xl font-bold">
          <span className="text-black">Tiger</span>
          <span className="text-[#FF8400]">Goal</span>
        </h1>
      </Link>
      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        <li className="px-3 py-2 hover:bg-[#FF8400] hover:text-white hover:rounded-md transition-all duration-200">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3 py-2 hover:bg-[#FF8400] hover:text-white hover:rounded-md transition-all duration-200">
          <Link to="/berita">Berita</Link>
        </li>
        <li className="px-3 py-2 hover:bg-[#FF8400] hover:text-white hover:rounded-md transition-all duration-200">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="px-3 py-2 hover:bg-[#FF8400] hover:text-white hover:rounded-md transition-all duration-200">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer z-500">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 w-[60%] h-full border-r border-black hover:text-[#FF8400] bg-[#F6F4F0] ease-in-out duration-500 z-40 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="w-full text-3xl font-bold text-[#FF8400] m-4">
          TigerGoal
        </h1>
        <ul className="p-4 uppercase">
          <li className="p-4 hover:bg-[#FF8400] hover:text-white hover:rounded-md transition-all duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:bg-[#FF8400] hover:text-white hover:rounded-md transition-all duration-200">
            <Link to="/berita">Berita</Link>
          </li>
          <li className="p-4 hover:bg-[#FF8400] hover:text-white hover:rounded-md transition-all duration-200">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="p-4 hover:bg-[#FF8400] hover:text-white hover:rounded-md transition-all duration-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
