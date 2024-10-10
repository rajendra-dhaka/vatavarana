import { Card } from "@/components";
import { getNearbyPlaces } from "@/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
async function getCurrentWeather(locations: string[]) {
  const weatherPromises = locations.map((location) =>
    fetch(
      `https://api.weatherapi.com/v1/current.json?q=${location}&aqi=yes&key=84e429c1ef754e38984121406240103`,
      { next: { revalidate: 3000 } }
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch currentWeatherData for ${location}`);
      }
      return response.json();
    })
  );

  return Promise.all(weatherPromises);
}
const index = async ({ weatherForecastData }: any) => {
  const curr_coords = weatherForecastData?.location;
  const currentWeatherNearby = await getCurrentWeather(
    getNearbyPlaces(curr_coords?.lat, curr_coords?.lon)
  );
  console.log(currentWeatherNearby);

  return (
    <Card>
      <div className="flex flex-col  gap-1">
        <h3 className="font-semibold text-xl">Weather Near You</h3>
        <div className="w-fit max-w-full flex gap-4 p-2 md:p-4 bg-primary overflow-auto rounded-xl">
          {currentWeatherNearby?.map((place, index) => (
            <Link
              key={index}
              href={`/weather?location=${place?.location.name}-${place?.location.region}-${place?.location.country}`}
            >
              <div className="min-w-36 bg-secondary rounded-lg p-1 flex flex-col items-center">
                <p>{place?.location?.name}</p>
                <Image
                  src={`https://${place?.current?.condition?.icon}`}
                  alt="weather"
                  width={75}
                  height={75}
                />{" "}
                <p className="text-center">{place?.current?.condition?.text}</p>
                <h3 className="text-xl font-semibold">
                  {place?.current?.temp_c}
                  <span className="text-base align-top">&deg;C</span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default index;
