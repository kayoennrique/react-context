import React from 'react';
import { createContext, useState } from 'react';

export const UserContext = createContext();
UserContext.displayName = "Usuário";

export const UserProvider = ({children}) => {
    const [name, setName] = useState("");
    const [balance, setBalance] = useState(0);
    return (
        <UserContext.Provider value={{name, setName, balance, setBalance
        }}>
            {children}
        </UserContext.Provider>
    )
}