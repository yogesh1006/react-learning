export function filterData(text, hotels) {
  if (text.length > 0) {
    const filteredData = hotels.filter((hotel) =>
      hotel?.data?.name?.toLowerCase()?.includes(text?.toLowerCase())
    );
    return filteredData;
  } else {
    return hotels;
  }
}
