import { useEffect, useState } from "react";

const Profile = (props) => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("api-call data")
    }, []);

    return (
        <div>
            <h1>its me {props.name}</h1>

            <h3>{count}</h3>
            <button onClick={() =>
                setCount(1)
            }>count</button>
        </div>
    )
}

export default Profile;