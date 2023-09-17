
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import cartImg from "../assets/images/cart-logo.jpeg";


const Title = () => (
  <a href="/">
    <h1 className="text-xl font-extrabold font-poppins">Roti Time</h1>
  </a>
);

const Header = () => {

  let online = useOnline;

  const { user } = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items);
  return (
    <div className="flex justify-between py-2 pl-6 bg-white items-baseline shadow-md">
      <Title />
      <div className="">
        <ul className="flex  justify-between py-2 space-x-4 pr-6">
          <li><Link className="links" to="/">Home</Link> </li>
          <li><Link className="links" to="/about">About</Link></li>
          <li ><Link className="links" to="/contact">Contact </Link></li>

          <li> <Link className="links" to="/instamart">Instamart </Link> </li>
          <li> <Link className="flex " to="/cart">Cart
            <span> <img className="w-12  rounded-full relative -top-2" src={cartImg}></img> </span>
            {cartItems.length} </Link></li>
        </ul>
      </div>
      <h1 className="p-2 font-poppins">WELCOME,{user.name}</h1>
      {/* <h1>{online ? "🔋" : "📕"}</h1> */}
    </div >
  )
};

export default Header;
