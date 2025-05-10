import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { ImCross } from "react-icons/im";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const MenuItem = ({ title, children, onClick }) => (
    <div
      className="flex justify-between px-5 items-center h-15 bg-background m-5 rounded-xl cursor-pointer"
      onClick={onClick}
    >
      <h1 className="text-2xl text-white">{title}</h1>
      {children}
    </div>
  );

  return (
    <div className="z-50">
      {/* Menu Icon */}
      <div className="absolute top-10 right-5 md:right-10">
        <CiMenuFries
          onClick={() => setIsOpen(!isOpen)}
          className="text-4xl text-white cursor-pointer"
          aria-label="Open Sidebar"
        />
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } absolute right-0 w-xs h-screen bg-white transition-transform duration-300`}
      >
        {/* Close Icon */}
        <div className="absolute top-10 right-5 md:right-10">
          <ImCross
            onClick={() => setIsOpen(!isOpen)}
            className="text-4xl text-black cursor-pointer"
            aria-label="Close Sidebar"
          />
        </div>

        {/* Menu Items */}
        <div className="w-full relative top-27 flex flex-col">
          <MenuItem title="Music">
            <div className="flex justify-center items-center cursor-pointer">
              <button className="bg-yellow-500 p-1 ">ON</button>
              <button className="bg-yellow-400 p-1 ">OFF</button>
            </div>
          </MenuItem>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <MenuItem title="Github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;