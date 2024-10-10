import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import { CiCalendar, CiLocationOn } from "react-icons/ci";

const index = async ({ currentWeatherData }: any) => {
  return (
    <div className="flex flex-col gap-2">
      {/* Current Weather Info &  Weather Icon*/}
      <div className="flex items-center gap-16 ">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium">Now</h3>
          <h1 className="text-3xl font-bold">
            {currentWeatherData?.current?.temp_c}&nbsp;
            <span className="text-xl align-top">&deg;C</span>
          </h1>
          <h3 className="text-md font-medium">
            {currentWeatherData?.current?.condition?.text}
          </h3>
        </div>
        <Image
          src={`https://${currentWeatherData?.current?.condition?.icon}`}
          alt="weather_icon"
          width={100}
          height={100}
        />
      </div>
      <hr className="border-t-2 border-purple-900" />
      {/* Location and Date */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span>
            <CiCalendar size={25} />
          </span>
          <h3 className="text-xs font-medium">
            {format(
              new Date(currentWeatherData?.location?.localtime),
              "eeee, dd MMMM yyyy"
            )}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <CiLocationOn size={25} />
          </span>
          <h3 className="text-xs font-medium">
            {`${currentWeatherData?.location?.name} ${currentWeatherData?.location?.region} ${currentWeatherData?.location?.country}`}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default index;
