import React, { useState } from "react";

const pageTitles = [
  "ExapndingCards",
  "Progress Steps",
  "Rotating Navigation Animation",
  "Hidden Search Widget",
  "Blurry Loading",
  "Scroll Animation",
  "Split Landing Page",
  "Form Wave",
  "Sound Board",
  "Dad Jokes",
  "ExapndingCards",
  "Progress Steps",
  "Rotating Navigation Animation",
  "Hidden Search Widget",
  "Blurry Loading",
  "Scroll Animation",
  "Split Landing Page",
  "Form Wave",
  "Sound Board",
  "Dad Jokes",
];
const SideNavbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenuClick = () => {
    setMenu((prev) => !prev);
  };
  const handleClose = () => {
    setMenu(false);
  };
  return (
    <>
      {/* MOBILE RESPONSIVE MENU */}
      <div>
        <div
          onClick={handleMenuClick}
          className="md:hidden flex flex-col gap-1"
        >
          <div className="w-10 h-1 bg-gray-500"></div>
          <div className="w-10 h-1 bg-gray-500"></div>
          <div className="w-10 h-1 bg-gray-500"></div>
        </div>
        {/* MENU LIST */}
        {menu && (
          <div className="absolute top-0 left-0 w-full min-h-screen bg-black text-white gap-9 text-xl z-40 border-t border-r border-b border-gray-300 p-10 ">
            <div className="flex justify-end mb-4">
              <button
                onClick={handleClose}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {pageTitles.map((title) => (
                <li onClick={handleClose} key={title}>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* LEFT SIDE NAVBAR */}
      <div className=" hidden md:block md:w-1/4 xl:w-1/5 border-t border-r border-b border-gray-300 p-4 ">
        <ul className="flex flex-col gap-4">
          {pageTitles.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideNavbar;
