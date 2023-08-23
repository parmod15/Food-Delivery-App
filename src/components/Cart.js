import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="font-bold font-poppins text-2xl">
        cart items {cartItems.length}
        {console.log(cartItems)}
      </h1>
      <button onClick={() => handleClearCart()}>clear all</button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem
            key={item?.card?.card?.itemCards[0]?.card?.info?.id}
            {...item?.card?.card?.itemCards[0]?.card?.info}
          />
          //   .card.card.itemCards[0].card.info
        ))}
      </div>
    </div>
  );
};

export default Cart;
