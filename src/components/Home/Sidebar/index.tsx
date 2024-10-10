import React from "react";
import { Astro, Card, CurrentWeather } from "../..";

const index = ({ currentWeatherData, weatherForecastData }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CurrentWeather currentWeatherData={currentWeatherData} />
      </Card>
      <Card>
        <Astro weatherForecastData={weatherForecastData} />
      </Card>
    </div>
  );
};

export default index;
