import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
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
    }

    return (!restaurant) ? <Shimmer /> : (
        <div className="flex">
            <div>
                {/* <h1>restaurant id:{param.id}</h1> */}
                <h2>{restaurant.cards[0]?.card?.card?.info?.name}</h2>
                <img src={IMG_CDN_URL + restaurant.cards[0]?.card?.card?.info?.cloudinaryImageId}></img>
                <h3>{restaurant.cards[0]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurant.cards[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurant.cards[0]?.card?.card?.info?.avgRating}</h3>
                <h3>{restaurant.cards[0]?.card?.card?.info?.costForTwoMsg}</h3>
            </div>

            <div>
                <h1>MENU</h1>
                <ul>
                    {(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards).map((item) => <li className="text-menu">{item?.card?.card?.title} <button className="p-1 bg-green-300" onClick={() => addFoodItem(item)}>add</button></li>)}
                </ul>
                {/* {console.log(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card.title)} */}
            </div>
        </div>
    )
}

export default RestaurantDetail;