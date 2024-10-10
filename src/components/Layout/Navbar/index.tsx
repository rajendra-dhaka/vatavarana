import { SearchBar } from "@/components";
import React from "react";

const index = () => {
  return (
    <div className="w-100vw bg-primary  p-2 md:p-4 flex items-center  gap-8 rounded-b-xl">
      {/* LOGO */}
      <div className="flex flex-col items-center md:divide-y-2  divide-slate-400 gap-1 ">
        <div className="bg-tertiary w-fit p-1 flex flex-col items-center rounded-md ">
          <h3 className=" text-xs md:text-2xl font-semibold text-primary">
            VATAVARANA
          </h3>
        </div>
        <p className="text-xs md:text-sm text-center text-white hidden  md:block">
          Weather Unlocked, Day Simplified
        </p>
      </div>
      {/* SEARCHBAR */}
      <div className=" flex-1 flex items-center justify-center">
        <SearchBar />
      </div>
    </div>
  );
};

export default index;
