import { format } from "date-fns";
import Image from "next/image";
import React from "react";

const index = ({ weatherForecastData }: any) => {
  const todayHourlyData = weatherForecastData?.forecast?.forecastday[0]?.hour;

  return (
    <div className="w-fit max-w-full flex gap-4 p-2 md:p-4 bg-primary overflow-auto rounded-xl">
      {todayHourlyData?.map((item, index) => (
        <div
          key={index}
          className="min-w-36 bg-secondary rounded-lg p-1 flex flex-col items-center"
        >
          <p> {format(new Date(item?.time), "h a")}</p>
          <Image
            src={`https://${item?.condition?.icon}`}
            alt="weather"
            width={75}
            height={75}
          />
          <p className="text-center">{item?.condition?.text}</p>
          <p className="text-xl font-semibold">
            {item?.temp_c} <span className="text-base align-top">&deg;C</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default index;
