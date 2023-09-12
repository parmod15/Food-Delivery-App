import { Outlet } from "react-router-dom";
import { Component } from "react";
import ProfileFunctional from "./Profile";
import Profile from "./ProfileClass";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // api call
  }

  render() {
    return (
      <div className="font-poppins ">
        {/* OUR MISSION */}

        <div className="w-full bg-blue-200 py-20">
          <h1 className="text-4xl py-8 leading-10 px-8 text-white font-bold">
            Our mission is to elevate the quality of life for the urban consumer
            with unparalleled convenience. Convenience is what makes us tick.
            It's what makes us get out of bed and say, "Let's do this."
          </h1>
        </div>

        {/* WHATS IN STORE */}

        <div className="py-24 flex flex-col items-center justify-center w-10/12 mx-auto">
          <h1 className="text-4xl">What’s In Store For The Future?</h1>
          <p className=" text-center py-8 w-9/12">
            Swiggy has grand plans to be India’s most loved hyperlocal player.
            It aims to be the most accessible platform on the network -
            reimagining the meaning of convenience in the country through a
            variety of service offerings.
          </p>
        </div>
        <hr></hr>

        {/* CHANGING THE GAAME */}

        <div className="py-24 w-10/12 gap-2 flex mx-auto flex-row justify-between">
          <h1 className="text-3xl font-extrabold">Changing the game</h1>
          <div className="flex flex-col bg-blue-200 px-4 py-4 ">
            <h1>15000+</h1>
            <p>Restaurants partner countrywide</p>
          </div>
          <div className="flex flex-col bg-blue-200 px-4 py-4">
            <h1>15000+</h1>
            <p>Restaurants partner countrywide</p>
          </div>
          <div className="flex flex-col bg-blue-200 px-4 py-4">
            <h1>15000+</h1>
            <p>Restaurants partner countrywide</p>
          </div>
          <div className="flex flex-col bg-blue-200 px-4 py-4">
            <h1>15000+</h1>
            <p>Restaurants partner countrywide</p>
          </div>
        </div>
        {/* 
                <UserContext.Consumer>
                    {({ user }) => <h3>{user.email}</h3>}
                </UserContext.Consumer>

                <Profile name={"ningaClass"} /> */}
      </div>
    );
  }
}

export default About;
