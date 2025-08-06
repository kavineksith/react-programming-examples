import { useContext } from "react";
import { UserContext } from "./UserInfo"; // Import the context

function InfoDisplay() {
    const user = useContext(UserContext); // Now it works!

    return (
        <p>User value: {user}</p>
    );
}

export default InfoDisplay;