import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(text, hotels) {
  if (text.length > 0) {
    const filteredData = hotels.filter((hotel) =>
      hotel.data.name.includes(text)
    );
    return filteredData;
  } else {
    return hotels;
  }
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("")

  return (
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
            console.log(restaurants, searchText);
            const data = filterData(searchText, restaurants);
            console.log("onclick", data);
            setRestaurants(data);
          }}
        >
          search
        </button>
        {searchText}
      </div>
      <div className="restaurant-list">
        {restaurants.map((item) => {
          return <RestaurantCard {...item.data} key={item.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
