import { IMG_CDN_URL } from "../constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = props;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} Star</h4>
    </div>
  );
};

export default RestaurantCard;
