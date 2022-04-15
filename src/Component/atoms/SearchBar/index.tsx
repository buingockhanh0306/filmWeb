import React from "react";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  return (
    <label className="relative mr-4 w-80 animate-[fadeIn_0.4s_ease]">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg className="flex items-center w-5 " viewBox="0 0 20 20">
          <GoSearch className="text-gray-300" />
        </svg>
      </span>
      <input
        className="w-full h-8 py-2 pr-3 border rounded-md text-textColor bg-primaryColor placeholder:italic placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-secondColor sm:text-sm"
        placeholder="Tìm kiếm..."
        type="text"
        name="search"
      />
    </label>
  );
};

export default SearchBar;
