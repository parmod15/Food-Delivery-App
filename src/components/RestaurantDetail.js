import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import starImage from "../assets/images/rating-star.png";
import ShimmerRestaurantDetails from "./ShimmerRestaurantDetails";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantDetail = () => {
  const params = useParams();
  const resId = params.id;
  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <ShimmerRestaurantDetails />
  ) : (
    <div className="flex flex-col font-poppins">
      <div className="w-full">
        {/* HEADER AREA */}
        <div className=" flex justify-between  w-10/12 mx-auto ">
          {/* RESTAURANT NAME AND AREA */}
          <div>
            <h2 className="text-xl font-bold">
              {restaurant.cards[0]?.card?.card?.info?.name}
            </h2>
            <h2 className="text-lg opacity-80">
              {restaurant.cards[0]?.card?.card?.info?.cuisines}
            </h2>
            <h3 className="text-lg opacity-80">
              {restaurant.cards[0]?.card?.card?.info?.city}
            </h3>
          </div>
          {/* RESTAURANT RATING */}
          <div className=" rounded-lg flex  items-center">
            <h3 className="text-green-400 font-bold flex gap-1  items-baseline ">
              {restaurant.cards[0]?.card?.card?.info?.avgRating}
              <span>
                <img className="w-4 " src={starImage}></img>
              </span>
            </h3>
            <h3 className="text-lg opacity-80">
              {restaurant.cards[0]?.card?.card?.info?.totalRatings}+
            </h3>
          </div>
        </div>
        <hr></hr>

        {/*  IMAGE AND MENU SECTION */}
        <div className=" w-10/12 mx-auto  justify-between">
          <img
            className="w-96 h-96 rounded-xl"
            src={
              IMG_CDN_URL +
              restaurant.cards[0]?.card?.card?.info?.cloudinaryImageId
            }
          ></img>
          {/* MENU DETAILS */}
          <div className="flex flex-col">
            <h1>MENU</h1>

            <ul>
              {(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards).map(
                (item) => (
                  <div>
                    <li className="bg-red-300 my-8">
                      {item?.card?.card?.title}
                      <button
                        className="p-1 bg-green-300"
                        onClick={() => addFoodItem(item)}
                      >
                        add
                      </button>
                    </li>
                  </div>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <div>
        {/* {console.log(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card.title)} */}
      </div>
    </div>
  );
};

export default RestaurantDetail;
