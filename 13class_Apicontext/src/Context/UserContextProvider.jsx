// creating a context provider 

import React, {useState} from "react";
import UserContext from "./UserContext";



// passing the children as a generic name 
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;

// now we did what we had to and passed the user and setUser 