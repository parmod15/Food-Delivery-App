import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-52 p-2 m-5 shadow-md h-4/5 font-poppins">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="">
        <h2 className="font-bold font-poppins h-12 pt-2 w[100%]">{name}</h2>
        <img></img>
        <h3 className="font-poppins text-sm h-14 pb-12 pt-2">
          {cuisines.slice(0, 5).join(", ")}
        </h3>
        <h4 className=" text-lg">{lastMileTravelString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
