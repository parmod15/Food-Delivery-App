import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
  let [counter, setCounter] = useState(0);

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // LOGIC FOR SHOWING CART EMPTY OR WITH PRODUCTS
  const cartLengthChecker = (cartItems) => {
    {
      if (cartItems.length > 0) {
        setCounter(1);
      }
    }
  };
  useEffect(() => {
    cartLengthChecker(cartItems);
  }, []);



  return counter === 0 ? (
    // EMPTY CARD WARNING
    <div className="flex font-poppins w-5/12 mx-auto h-96  items-center justify-center text-3xl">
      <div>
        <h1>Your Cart is Empty Add something :)</h1>
      </div>
    </div>
  ) : (
    //  MAIN CART COMPONENT
    <div
      className="w-5/12 border flex flex-col  mx-auto
    "
    >
      <div className="flex  justify-around items-baseline font-poppins">
        <h1 className="font-extrabold mt-12 font-poppins text-2xl">
          cart items {cartItems.length}
          {/* {console.log(cartItems[0]?.card?.info)} */}
        </h1>
        <button
          className="bg-green-500 text-white px-8 rounded-md h-10 hover:bg-white hover:text-green-500 hover:border hover:border-green-500 transition-all duration-500"
          onClick={() => handleClearCart()}
        >
          clear all
        </button>
      </div>

      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem key={item?.card?.info?.id} {...item?.card?.info} />
        ))}
      </div>

      {cartItems.length !== 0 ? (
        <button className="bg-green-500 px-4 py-2 mt-4 text-white text-lg hover:scale-90 hover:rounded-lg transition-all duration-1000">
          Proceed to payment
        </button>
      ) : null}
    </div>
  );
};

export default Cart;
