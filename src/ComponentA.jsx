import React, {useState, useEffect, useContext,createContext} from "react";
import ComponentB from './ComponentB.jsx'

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Panda")

    return (
        <div>
            <h1>ComponentA</h1>
            
        </div>
    )
}