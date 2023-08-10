import { useState, useEffect } from "react";

const UseGetRestaurants = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurannts] = useState([]);





    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        // console.log(json.data.cards[2].data.data.cards);
        // console.log(json?.data?.cards[2]?.data?.data?.cards)
        console.log(allRestaurants)
        return allRestaurants;
    }



}
export default UseGetRestaurants;