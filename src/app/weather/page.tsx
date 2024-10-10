import { Card, Hero, NearbyPlaces, Sidebar } from "@/components";
import React from "react";

async function getCurrentWeather(location: string) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?q=${location}&aqi=yes&key=84e429c1ef754e38984121406240103`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch currentWeatherData");
  }

  return res.json();
}

async function getWeatherForecast(location: string) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?q=${location}&aqi=yes&days=5&key=84e429c1ef754e38984121406240103`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch currentWeatherData");
  }

  return res.json();
}

const HomePage = async ({ searchParams }: any) => {
  const { location } = searchParams;

  const currentWeather = await getCurrentWeather(location);
  const weatherForecast = await getWeatherForecast(location);

  const [currentWeatherData, weatherForecastData] = await Promise.all([
    currentWeather,
    weatherForecast,
  ]);

  return (
    <div className="h-full w-full flex gap-8 p-2 md:p-4 rounded-md ">
      <div className="w-[25%]">
        <Sidebar
          currentWeatherData={currentWeatherData}
          weatherForecastData={weatherForecastData}
        />
      </div>
      <div className="w-[75%] flex flex-col gap-8">
        <Hero weatherForecastData={weatherForecastData} />
        <NearbyPlaces weatherForecastData={weatherForecastData} />
      </div>
    </div>
  );
};

export default HomePage;
