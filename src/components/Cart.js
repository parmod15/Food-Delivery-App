import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div>
            <h1 className="font-bold font-poppins text-2xl">cart items {cartItems.length}</h1>
            <button onClick={() => handleClearCart()}>clear all</button>
            <div className="flex">
                {cartItems.map((item) => <FoodItem key={item.id} {...item} />)}</div>

        </div>
    )
};

export default Cart;