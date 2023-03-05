import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(text, hotels) {
  if (text.length > 0) {
    const filteredData = hotels.filter((hotel) =>
      hotel?.data?.name?.toLowerCase()?.includes(text?.toLowerCase())
    );
    return filteredData;
  } else {
    return hotels;
  }
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8761653&lng=75.3433139&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json?.data?.cards[2]?.data?.data?.cards);
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  };

  //not render compoenent -> Early return
  if (!allRestaurants) return null;

  // if(filteredRestaurants.length === 0) return <h1>No restaurant for filter!!!</h1>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          search
        </button>
        {searchText}
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.map((item) => {
          return <RestaurantCard {...item.data} key={item.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
