import { IMG_CDN_URL } from "../config";

const FoodItem = ({ name, imageId, price }) => {
  return (
    <div className="w-52 p-2 m-5 shadow-md h-4/5 font-poppins">
      <img src={IMG_CDN_URL + imageId} />
      <div className="">
        <h2 className="font-bold font-poppins text-sm h-12 ">{name}</h2>
        <h4 className=" text-lg ">₹{price / 100}</h4>
      </div>
    </div>
  );
};

export default FoodItem;
