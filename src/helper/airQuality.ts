const getAirQualityInfo = (index: number) => {
  let condition;
  let color;

  switch (index) {
    case 1:
      condition = "Good";
      color = "green";
      break;
    case 2:
      condition = "Moderate";
      color = "yellow";
      break;
    case 3:
      condition = "Unhealthy for Sensitive Group";
      color = "orange";
      break;
    case 4:
      condition = "Unhealthy";
      color = "red";
      break;
    case 5:
      condition = "Very Unhealthy";
      color = "purple";
      break;
    case 6:
      condition = "Hazardous";
      color = "maroon";
      break;
    default:
      condition = "Unknown";
      color = "gray";
  }

  return { condition, color };
};

export default getAirQualityInfo;
