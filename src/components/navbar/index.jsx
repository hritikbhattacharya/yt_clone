import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="flex items-center justify-between bg-black p-4  border-t-none border-r-none border-l-none ">
        <div class="w-1/3 text-white text-xl font-bold">YT_CLONE</div>
        

        <div class="w-1/3 flex-1 mx-4 items-center">
          <input
            type="text"
            placeholder="Search"
            class="w-96 border border-gray-400 bg-transparent text-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <img
            src="profile.png"
            alt="Profile Pic"
            class="w-10 h-10 rounded-full"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
