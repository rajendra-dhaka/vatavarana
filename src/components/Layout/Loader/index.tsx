import React, { useState, useEffect } from "react";
import {
  IoIosSunny,
  IoIosRainy,
  IoIosThunderstorm,
  IoIosCloudy,
} from "react-icons/io";

const icons = [IoIosSunny, IoIosRainy, IoIosThunderstorm, IoIosCloudy];

const Loader = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 200); // Change icon every second

    return () => clearInterval(intervalId); // Cleanup
  }, []); // Run only once on component mount

  return (
    <div className="flex items-center justify-center">
      {icons.map((Icon, index) => (
        <div
          key={index}
          style={{ display: currentIconIndex === index ? "block" : "none" }}
        >
          <Icon size={100} className="text-primary" />
        </div>
      ))}
    </div>
  );
};

export default Loader;
