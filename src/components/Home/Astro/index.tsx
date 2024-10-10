import React from "react";
import { WiMoonrise, WiMoonset, WiSunrise, WiSunset } from "react-icons/wi";

const index = ({ weatherForecastData }: any) => {
  return (
    <div>
      <h3 className="text-2xl font-medium mb-4">Astro</h3>
      <ul className="flex flex-col divide-y-2 divide-purple-900">
        <li className="flex items-center justify-between p-1">
          <WiSunrise
            size={50}
            className="bg-yellow-100 hover:bg-orange-500 text-orange-500 hover:text-yellow-100 rounded-full border-2 border-orange-500"
          />
          <p className="text-md font-medium">
            SUNRISE:
            <span className="ml-2 ">
              {weatherForecastData?.forecast?.forecastday[0]?.astro?.sunrise}
            </span>
          </p>
        </li>
        <li className="flex items-center justify-between p-1">
          <WiSunset
            size={50}
            className="bg-yellow-100 hover:bg-orange-500 text-orange-500 hover:text-yellow-100 rounded-full border-2 border-orange-500"
          />
          <p className="text-md font-medium">
            SUNSET:
            <span className="ml-2 ">
              {weatherForecastData?.forecast?.forecastday[0]?.astro?.sunset}
            </span>
          </p>
        </li>
        <li className="flex items-center justify-between p-1">
          <WiMoonrise
            size={50}
            className="bg-black hover:bg-yellow-300 text-yellow-300 hover:text-black rounded-full border-2 border-yellow-300"
          />
          <p className="text-md font-medium">
            MOONRISE:
            <span className="ml-2 ">
              {weatherForecastData?.forecast?.forecastday[0]?.astro?.moonrise}
            </span>
          </p>
        </li>
        <li className="flex items-center justify-between p-1">
          <WiMoonset
            size={50}
            className="bg-black hover:bg-yellow-300 text-yellow-300 hover:text-black rounded-full border-2 border-yellow-300"
          />
          <p className="text-md font-medium">
            MOONSET:
            <span className="ml-2 ">
              {weatherForecastData?.forecast?.forecastday[0]?.astro?.moonset}
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default index;
