import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/hooks/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnline();
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

  if (!isOnline) {
    return <h1>Offline, Please check your internet connection!!! </h1>;
  }
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
          return (
            <Link to={"/restaurant/" + item.data.id} key={item.data.id}>
              <RestaurantCard {...item.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
