import React from "react";

const index = ({ weatherForecastData }: any) => {
  const airQualityData = Object.entries(
    weatherForecastData?.current?.air_quality
  );
  return (
    <div className="w-fit max-w-full flex gap-4 p-2 md:p-4 bg-primary overflow-auto rounded-xl ">
      {airQualityData?.map((item, index) => (
        <div
          key={index}
          className="min-w-36 bg-secondary rounded-lg p-1 flex flex-col items-center"
        >
          <p className="text-center text-lg">{item[0]}</p>
          <p className="text-center text-xl font-semibold">{item[1]}</p>
        </div>
      ))}
    </div>
  );
};

export default index;
