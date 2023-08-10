import { IMG_CDN_URL } from "../config";


const FoodItem = ({
  name,
  description,
  cloudinaryImageId,
  price,
}) => {



  return (
    <div className="w-52 p-2 m-5 shadow-md h-4/5 font-poppins">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="">
        <h2 className="font-bold font-poppins h-12 pt-2 w[100%]">{name}</h2>

        <h3 className="font-poppins text-sm h-14 pb-12 pt-2">{description}</h3>
        <h4 className=" text-lg">rupees {price / 100}</h4>

      </div>
    </div>
  );
};

export default FoodItem;
