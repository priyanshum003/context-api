import React from "react";
import UserContext from "./UserContext.js";

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState();
    return (
        <>
             {/* The UserContext.Provider component is used to wrap the children components. The value prop is used to pass the user and setUser state to the children components. */}
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserContextProvider;