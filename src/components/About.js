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
      <div className="font-poppins">
        <h1>about us page</h1>
        <div className="w-full bg-[#bdecf1]">
          <h1 className="text-4xl">
            Our mission is to elevate the quality of life for the urban consumer
            with unparalleled convenience. Convenience is what makes us tick.
            It's what makes us get out of bed and say, "Let's do this."
          </h1>
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
