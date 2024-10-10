function getNearbyPlaces(lat, long) {
  // Extract integer part
  const latInt = Math.floor(lat);
  const longInt = Math.floor(long);

  // Generate 5 random coordinates
  const randomCoordinates = Array.from({ length: 5 }, () => {
    const randomLat = (latInt + Math.random()).toFixed(2);
    const randomLong = (longInt + Math.random()).toFixed(2);
    return `${randomLat},${randomLong}`;
  });
  return randomCoordinates;
}

export default getNearbyPlaces;
