import { AirQuality, Card, HourlyWeather } from "@/components";
import { getAirQualityInfo } from "@/helper";
import React from "react";

const index = ({ weatherForecastData }: any) => {
  const airQualityText = getAirQualityInfo(
    weatherForecastData?.current?.air_quality?.["us-epa-index"]
  );
  return (
    <Card>
      <div className="flex flex-col gap-4">
        {/* Location Info */}
        <div className="flex flex-col w-fit gap-1">
          <h3 className="font-semibold text-xl">Today&apos;s Highlights</h3>
          <p className="text-md self-center">
            <span className="font-semibold">Place:&nbsp;</span>
            {`${weatherForecastData?.location?.name}, ${weatherForecastData?.location?.region}, ${weatherForecastData?.location?.country}`}
            &nbsp;&nbsp;- [<span className="font-semibold">lat: </span>
            {weatherForecastData?.location?.lat},
            <span className="font-semibold">lon: </span>
            {weatherForecastData?.location?.lon}]
          </p>
        </div>
        {/* Hourly weather Info */}
        <div className="flex flex-col  gap-1">
          <h3 className="font-semibold text-xl">Hourly Weather Data</h3>
          <HourlyWeather weatherForecastData={weatherForecastData} />
        </div>
        {/* Air Quality Info */}
        <div className="flex flex-col  gap-1">
          <h3 className="font-semibold text-xl">
            Air Quality Data -
            <span className="text-lg font-semibold text-primary">
              Today air is{" "}
              <span className="text-xl">{airQualityText?.condition}</span>
            </span>
          </h3>
          <AirQuality weatherForecastData={weatherForecastData} />
        </div>
      </div>
    </Card>
  );
};

export default index;
