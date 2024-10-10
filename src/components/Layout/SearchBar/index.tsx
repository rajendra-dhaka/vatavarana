"use client";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const router = useRouter();

  const fetchResults = useCallback(async () => {
    if (searchTerm) {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/search.json?q=${searchTerm}&key=84e429c1ef754e38984121406240103`
        );
        const result = await res.json();
        if (Array.isArray(result)) {
          setSuggestions(result);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    }
  }, [searchTerm]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchResults();
    }, 500); // Adjust debounce delay here (in milliseconds)

    return () => clearTimeout(timeoutId);
  }, [searchTerm, fetchResults]);

  const handleLocationSearch = (e) => {
    setSearchTerm(e.target.value.trim());
    if (e.target.value === "") {
      setSuggestions([]);
    }
  };

  const hanldeLocationSelection = (url) => {
    setSuggestions([]);
    router.push(`/weather?location=${url}`);
  };

  return (
    <div className="w-full md:w-[50%] relative ">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search by city, place, zipcode"
        className="w-full text-xs md:text-base outline-none p-2 rounded-sm text-slate-600"
        onChange={handleLocationSearch}
      />
      <CiSearch className="absolute right-2 bottom-2 size-4 md:size-6 text-slate-600" />
      {suggestions?.length > 0 && (
        <ul className="max-h-80 overflow-auto bg-gray-100 z-999 absolute top-full left-0 right-0 divide-y-2 divide-purple-200 ">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-3 cursor-pointer hover:bg-gray-300"
              onClick={() => hanldeLocationSelection(suggestion?.url)}
            >
              <h3 className="font-semibold text-xl text-slate-800">
                {suggestion?.name}
              </h3>
              <div className="flex items-center gap-1">
                <p className="text-slate-600">{suggestion?.region}</p>
                <span className="text-slate-500">{suggestion?.country}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
