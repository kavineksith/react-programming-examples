import { createContext } from "react";
import InfoDisplay from "./Sample";

// Export the context so other files can use it
export const UserContext = createContext();

function UserInfo() {
    const user = "Hello World";

    return (
        <UserContext.Provider value={user}>
            <p>Hey, {user}!</p>
            {/* InfoDisplay must be a child to access context */}
            <InfoDisplay />
        </UserContext.Provider>
    );
}

export default UserInfo;