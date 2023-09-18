import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import hero_image from "../assets/images/hero-img.webp";
import image from "../assets/images/delivery.png";
import heroImage from "../assets/images/hero-image.jpg";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("search for your restaurants");

  useEffect(() => {
    // api call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredRestaurants(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setAllRestaurants(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    // console.log(
    //   json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // );
  }

  const online = useOnline();
  if (!online) {
    return <h1>😈 check your internet connection</h1>;
  }

  //  early return
  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0) return <h1>nothing find for your search</h1>
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex flex-row justify-center gap-20 py-14 bg-slate-200 relative">
        <img
          src={heroImage}
          className="w-full h-[30rem] absolute -top-5 z-20"
        ></img>
        <div className=" flex flex-col gap-5 font-poppins z-50">
          <h2 className="text-3xl">
            Discover restaurants near that <br></br> delivers near you.
          </h2>
          <h2 className="text-xl flex gap-x-2">
            Delivered on time{" "}
            <span>
              <img src={image} width={"50px"}></img>
            </span>
          </h2>
          <div className="">
            <input
              type="text"
              className="rounded-sm py-2 w-56 focus:bg-blue-100 text-black"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />

            <button
              className="py-2 px-5 m-5 bg-[rgb(229,82,58)] text-white rounded-md hover:bg-blue-400 transition-bg duration-300"
              onClick={() => {
                // need to filter the data
                const data = filterData(searchInput, allRestaurants);
                // update the state - restaurant varoable
                setFilteredRestaurants(data);
              }}
            >
              Search
            </button>
          </div>
          {/* <button></button> */}
        </div>
      </div>
      <h2 className="mt-32 text-center font-poppins text-4xl pt-3  font-semibold">
        ALL Restaurants
      </h2>
      <div className="flex flex-wrap w-10/12 justify-center items-center m-auto">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              className="links"
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
