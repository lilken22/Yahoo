import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import  yahoo  from "../Images/yahoo_logo.png";

export default function Nav() {
  const Links = [
    { name: "Help", Link: "/help" },
    { name: "Terms", Link: "/terms" },
    { name: "Privacy", Link: "/privacy" },

  ];

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className='fixed w-full top-0 left-0 cursor-pointer z-30 md:bg-white md:z-10'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center  md:text-blue-300 text-green-500 text-center'>
        <img src={yahoo} alt="home-building" className="object-cover h-full w-full" />
        </div>

        <div onClick={toggleMenu} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden' aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <IoMdClose /> : <IoMdMenu />}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 bg-gray-600 text-green-500' : 'top-[-490px] opacity-0'} md:opacity-100 md:bg-transparent md:text-black`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.Link} className='md:text-blue-300 md:hover:text-green-700 duration-500 font-bold'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};