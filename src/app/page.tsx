"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const delhiLocation = "28.634363411705962,77.21884886667738";

  useEffect(() => {
    // Function to get the user's geolocation
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("success m aaya");
            const { latitude, longitude } = position.coords;
            const locationQuery = `?location=${latitude},${longitude}`;
            router.push(`/weather${locationQuery}`);
          },
          (error) => {
            console.log("error m aaya");

            console.error("Error getting geolocation:", error);
            router.push(`/weather?location=${delhiLocation}`);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    // Call the getLocation function when the component mounts
    getLocation();
  }, [router]);

  return <div></div>;
};

export default Page;
