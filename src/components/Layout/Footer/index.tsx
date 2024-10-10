import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="w-100vw bg-primary  p-1 md:p-2  overflow-hidden rounded-t-xl">
      <div className="flex items-center justify-center gap-4 text-xs text-white">
        {/* Footer Text */}
        <div className="text-center">
          Powered by&nbsp;
          <a
            href="https://www.weatherapi.com/"
            title="Free Weather API"
            className="font-medium"
            target="_blank"
          >
            WeatherAPI.com
          </a>
        </div>
        {/* Footer Image */}
        <a
          href="https://www.weatherapi.com/"
          title="Free Weather API"
          target="_blank"
          className="bg-tertiary px-1"
        >
          <Image
            src="https://cdn.weatherapi.com/v4/images/weatherapi_logo.png"
            alt="Weather data by WeatherAPI.com"
            width={75}
            height={75}
          />
        </a>
      </div>
    </div>
  );
};

export default index;
