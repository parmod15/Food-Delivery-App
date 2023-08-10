import React from "react";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "dummy",
                location: "dummy location",
                company: "dummy company"
            },

        }
    }

    async componentDidMount() {
        // api calls
        // console.log("compoentdidmount")

        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()
        console.log(json);
        this.setState({
            userInfo: json,
        })
    }


    render() {
        return (
            <>
                <h1>profle class</h1>
                <h2>name: {this.state.userInfo.name}</h2>
                <h3>location: {this.state.userInfo.location}</h3>
                <h3>company: {this.state.userInfo.company}</h3>


            </>
        )
    }
}
export default Profile;