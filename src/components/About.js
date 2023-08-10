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
            <div>
                <h1>about us page</h1>
                <p>finding the path</p>

                <UserContext.Consumer>
                    {({ user }) => <h3>{user.email}</h3>}
                </UserContext.Consumer>

                <Profile name={"ningaClass"} />
            </div>
        )
    }
}


export default About;